/**
 * three-scene.js — BlackSide Security 3D Hero Effects
 * 3D Particle Network + Rotating Shield Globe (vanilla Three.js)
 * 
 * HOW TO USE:
 * Add this line at the END of index.html, just before </body>:
 * <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
 * <script src="three-scene.js"></script>
 */

(function () {
  'use strict';

  // ─── CONFIG ───────────────────────────────────────────────────────────────
  const CFG = {
    // Colors matching your CSS variables
    cyan:     0x00f0ff,
    purple:   0xa855f7,
    magenta:  0xec4899,

    // Particle network
    particles: {
      count:        180,
      spread:       28,
      size:         0.08,
      connectDist:  7,
      mouseStrength: 2.5,
    },

    // Shield globe
    shield: {
      radius:       3.2,
      rings:        14,
      segments:     14,
      rotSpeed:     0.003,
      pulseSpeed:   0.8,
    },
  };

  // ─── WAIT FOR DOM ─────────────────────────────────────────────────────────
  function init() {
    const hero = document.querySelector('.hero-section');
    if (!hero || typeof THREE === 'undefined') return;

    // Don't double-init
    if (hero.querySelector('#three-canvas')) return;

    // ── Canvas setup ────────────────────────────────────────────────────────
    const canvas = document.createElement('canvas');
    canvas.id = 'three-canvas';
    Object.assign(canvas.style, {
      position: 'absolute',
      top: '0', left: '0',
      width: '100%', height: '100%',
      pointerEvents: 'none',
      zIndex: '0',
      opacity: '0',
      transition: 'opacity 1.2s ease',
    });

    // Insert BEFORE circuit-pattern so it sits below text
    const bg = hero.querySelector('.hero-background');
    if (bg) bg.prepend(canvas);
    else hero.prepend(canvas);

    // Fade in
    requestAnimationFrame(() => { canvas.style.opacity = '1'; });

    const W = hero.offsetWidth;
    const H = hero.offsetHeight;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, W / H, 0.1, 200);
    camera.position.set(0, 0, 22);

    // ── Mouse tracking ───────────────────────────────────────────────────────
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    document.addEventListener('mousemove', (e) => {
      mouse.tx = (e.clientX / window.innerWidth  - 0.5) * 2;
      mouse.ty = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    // ═══════════════════════════════════════════════════════════════════════
    //  1. PARTICLE NETWORK
    // ═══════════════════════════════════════════════════════════════════════
    const P = CFG.particles;

    // positions & velocities
    const positions = new Float32Array(P.count * 3);
    const velocities = [];
    const posArr = [];

    for (let i = 0; i < P.count; i++) {
      const x = (Math.random() - 0.5) * P.spread;
      const y = (Math.random() - 0.5) * P.spread * 0.6;
      const z = (Math.random() - 0.5) * P.spread * 0.5;
      positions[i * 3]     = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      posArr.push(new THREE.Vector3(x, y, z));
      velocities.push(new THREE.Vector3(
        (Math.random() - 0.5) * 0.012,
        (Math.random() - 0.5) * 0.008,
        (Math.random() - 0.5) * 0.005,
      ));
    }

    const dotGeo = new THREE.BufferGeometry();
    dotGeo.setAttribute('position', new THREE.BufferAttribute(positions.slice(), 3));

    const dotMat = new THREE.PointsMaterial({
      color: CFG.cyan,
      size: P.size,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true,
    });
    const dots = new THREE.Points(dotGeo, dotMat);
    scene.add(dots);

    // Lines between close particles
    const lineGeo  = new THREE.BufferGeometry();
    const linePositions = new Float32Array(P.count * P.count * 6); // max pairs
    const lineColors    = new Float32Array(P.count * P.count * 6);
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    lineGeo.setAttribute('color',    new THREE.BufferAttribute(lineColors, 3));

    const lineMat = new THREE.LineSegments(
      lineGeo,
      new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.35,
        blending: THREE.AdditiveBlending,
      })
    );
    scene.add(lineMat);

    // color helpers
    const cCyan    = new THREE.Color(CFG.cyan);
    const cPurple  = new THREE.Color(CFG.purple);
    const cMagenta = new THREE.Color(CFG.magenta);

    function updateNetwork() {
      const pos  = dotGeo.attributes.position.array;
      const lPos = lineGeo.attributes.position.array;
      const lCol = lineGeo.attributes.color.array;
      let lineIdx = 0;

      for (let i = 0; i < P.count; i++) {
        // move
        posArr[i].addScaledVector(velocities[i], 1);

        // mouse repulsion
        const dx = posArr[i].x - mouse.x * P.mouseStrength * 10;
        const dy = posArr[i].y + mouse.y * P.mouseStrength * 10;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 6) {
          posArr[i].x += (dx / dist) * 0.04;
          posArr[i].y += (dy / dist) * 0.04;
        }

        // bounce
        ['x','y','z'].forEach((ax, ai) => {
          const lim = [P.spread/2, P.spread*0.3, P.spread*0.25][ai];
          if (posArr[i][ax] >  lim) velocities[i][ax] *= -1;
          if (posArr[i][ax] < -lim) velocities[i][ax] *= -1;
        });

        pos[i*3]   = posArr[i].x;
        pos[i*3+1] = posArr[i].y;
        pos[i*3+2] = posArr[i].z;

        // connect nearby
        for (let j = i + 1; j < P.count; j++) {
          const d = posArr[i].distanceTo(posArr[j]);
          if (d < P.connectDist) {
            const alpha = 1 - d / P.connectDist;
            // pick color based on distance
            const col = d < P.connectDist * 0.4
              ? cCyan
              : d < P.connectDist * 0.7
              ? cPurple
              : cMagenta;

            lPos[lineIdx]   = posArr[i].x;
            lPos[lineIdx+1] = posArr[i].y;
            lPos[lineIdx+2] = posArr[i].z;
            lPos[lineIdx+3] = posArr[j].x;
            lPos[lineIdx+4] = posArr[j].y;
            lPos[lineIdx+5] = posArr[j].z;

            lCol[lineIdx]   = col.r * alpha;
            lCol[lineIdx+1] = col.g * alpha;
            lCol[lineIdx+2] = col.b * alpha;
            lCol[lineIdx+3] = col.r * alpha;
            lCol[lineIdx+4] = col.g * alpha;
            lCol[lineIdx+5] = col.b * alpha;

            lineIdx += 6;
          }
        }
      }

      dotGeo.attributes.position.needsUpdate = true;
      lineGeo.attributes.position.needsUpdate = true;
      lineGeo.attributes.color.needsUpdate    = true;
      lineGeo.setDrawRange(0, lineIdx / 3);
    }

    // ═══════════════════════════════════════════════════════════════════════
    //  2. SHIELD GLOBE
    // ═══════════════════════════════════════════════════════════════════════
    const S = CFG.shield;
    const shieldGroup = new THREE.Group();

    // Wireframe sphere — main globe
    const sphereGeo = new THREE.SphereGeometry(S.radius, S.rings, S.segments);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: CFG.cyan,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    shieldGroup.add(sphere);

    // Inner solid globe (glow core)
    const innerGeo = new THREE.SphereGeometry(S.radius * 0.55, 24, 24);
    const innerMat = new THREE.MeshBasicMaterial({
      color: CFG.purple,
      transparent: true,
      opacity: 0.07,
    });
    shieldGroup.add(new THREE.Mesh(innerGeo, innerMat));

    // Equatorial ring
    const ringGeo = new THREE.TorusGeometry(S.radius * 1.08, 0.04, 8, 80);
    const ringMat = new THREE.MeshBasicMaterial({
      color: CFG.cyan,
      transparent: true,
      opacity: 0.55,
    });
    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    shieldGroup.add(ring1);

    // Tilted ring
    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(S.radius * 1.15, 0.025, 8, 80),
      new THREE.MeshBasicMaterial({ color: CFG.purple, transparent: true, opacity: 0.4 })
    );
    ring2.rotation.x = Math.PI / 3;
    ring2.rotation.z = Math.PI / 6;
    shieldGroup.add(ring2);

    // Shield face icon (flat pentagon-ish shield SVG extruded via Shape)
    function buildShieldShape() {
      const shape = new THREE.Shape();
      const r = 1.1;
      shape.moveTo(0,  r);
      shape.lineTo( r * 0.7,  r * 0.5);
      shape.lineTo( r * 0.7, -r * 0.2);
      shape.lineTo(0, -r * 1.0);
      shape.lineTo(-r * 0.7, -r * 0.2);
      shape.lineTo(-r * 0.7,  r * 0.5);
      shape.closePath();
      const geo = new THREE.ShapeGeometry(shape, 6);
      const mat = new THREE.MeshBasicMaterial({
        color: CFG.cyan,
        transparent: true,
        opacity: 0.22,
        side: THREE.DoubleSide,
      });
      return new THREE.Mesh(geo, mat);
    }
    const shieldFace = buildShieldShape();
    shieldGroup.add(shieldFace);

    // Lock icon (circle + rectangle outline)
    const lockGroup = new THREE.Group();

    const lockBodyGeo = new THREE.PlaneGeometry(0.7, 0.55);
    const lockBodyMat = new THREE.MeshBasicMaterial({
      color: CFG.cyan, transparent: true, opacity: 0.9, side: THREE.DoubleSide
    });
    const lockBody = new THREE.Mesh(lockBodyGeo, lockBodyMat);
    lockBody.position.y = -0.05;
    lockGroup.add(lockBody);

    const lockArcCurve = new THREE.EllipseCurve(0, 0, 0.22, 0.28, 0, Math.PI, false, 0);
    const lockArcPoints = lockArcCurve.getPoints(20);
    const lockArcGeo = new THREE.BufferGeometry().setFromPoints(lockArcPoints);
    const lockArcLine = new THREE.Line(lockArcGeo, new THREE.LineBasicMaterial({ color: CFG.cyan, linewidth: 2 }));
    lockArcLine.position.y = 0.22;
    lockGroup.add(lockArcLine);

    lockGroup.position.z = 0.05;
    shieldGroup.add(lockGroup);

    // Orbiting dots
    const orbitDots = [];
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      const orb = new THREE.Mesh(
        new THREE.SphereGeometry(0.1, 8, 8),
        new THREE.MeshBasicMaterial({ color: i % 2 === 0 ? CFG.cyan : CFG.magenta, transparent: true, opacity: 0.9 })
      );
      orb.userData.angle  = angle;
      orb.userData.radius = S.radius * 1.3;
      orb.userData.speed  = 0.008 + i * 0.002;
      orb.userData.yOffset = Math.sin(angle) * 0.8;
      shieldGroup.add(orb);
      orbitDots.push(orb);
    }

    // Position the whole shield — right side on desktop, center on mobile
    function positionShield() {
      const w = window.innerWidth;
      if (w >= 1024) {
        shieldGroup.position.set(7, 0, 0);
      } else if (w >= 768) {
        shieldGroup.position.set(4, -1, 0);
        shieldGroup.scale.setScalar(0.85);
      } else {
        shieldGroup.position.set(0, -2, -3);
        shieldGroup.scale.setScalar(0.6);
      }
    }
    positionShield();
    scene.add(shieldGroup);

    // ── Ambient glow sprites ─────────────────────────────────────────────
    function makeGlow(color, size, x, y, z) {
      const canvas2 = document.createElement('canvas');
      canvas2.width = canvas2.height = 128;
      const ctx = canvas2.getContext('2d');
      const grad = ctx.createRadialGradient(64,64,0, 64,64,64);
      const hex = '#' + color.toString(16).padStart(6,'0');
      grad.addColorStop(0,   hex + 'cc');
      grad.addColorStop(0.4, hex + '44');
      grad.addColorStop(1,   hex + '00');
      ctx.fillStyle = grad;
      ctx.fillRect(0,0,128,128);
      const tex = new THREE.CanvasTexture(canvas2);
      const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, opacity: 0.45, blending: THREE.AdditiveBlending, depthWrite: false });
      const sprite = new THREE.Sprite(mat);
      sprite.scale.set(size, size, 1);
      sprite.position.set(x, y, z);
      return sprite;
    }
    scene.add(makeGlow(CFG.cyan,    12,  7,  1, -2));
    scene.add(makeGlow(CFG.purple,  10, -5, -2, -3));
    scene.add(makeGlow(CFG.magenta,  8,  2,  4, -4));

    // ─── Resize handler ───────────────────────────────────────────────────
    function onResize() {
      const w = hero.offsetWidth;
      const h = hero.offsetHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      positionShield();
    }
    window.addEventListener('resize', onResize);

    // ─── Animation loop ───────────────────────────────────────────────────
    const clock = new THREE.Clock();
    let frame = 0;

    function animate() {
      requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      frame++;

      // Smooth mouse follow
      mouse.x += (mouse.tx - mouse.x) * 0.06;
      mouse.y += (mouse.ty - mouse.y) * 0.06;

      // ── Particle network ──────────────────────────────────────────────
      updateNetwork();

      // Slight camera drift with mouse
      camera.position.x += (mouse.x * 0.8 - camera.position.x) * 0.03;
      camera.position.y += (-mouse.y * 0.5 - camera.position.y) * 0.03;
      camera.lookAt(scene.position);

      // ── Shield globe ──────────────────────────────────────────────────
      shieldGroup.rotation.y += S.rotSpeed;
      shieldGroup.rotation.x = Math.sin(t * 0.3) * 0.08;

      // Mouse tilt
      shieldGroup.rotation.z += (mouse.y * 0.15 - shieldGroup.rotation.z) * 0.04;

      // Pulse rings
      const pulse = 1 + Math.sin(t * S.pulseSpeed) * 0.04;
      ring1.scale.setScalar(pulse);
      ring2.scale.setScalar(1 + Math.sin(t * S.pulseSpeed + 1) * 0.05);

      // Orbit dots
      orbitDots.forEach((orb) => {
        orb.userData.angle += orb.userData.speed;
        const a = orb.userData.angle;
        const r = orb.userData.radius;
        orb.position.set(
          Math.cos(a) * r,
          orb.userData.yOffset + Math.sin(t * 0.5) * 0.3,
          Math.sin(a) * r * 0.4
        );
      });

      // Pulse shield opacity
      sphereMat.opacity = 0.14 + Math.sin(t * 1.2) * 0.05;
      ringMat.opacity   = 0.45 + Math.sin(t * 0.9) * 0.1;

      renderer.render(scene, camera);
    }

    animate();
  }

  // ─── Bootstrap ────────────────────────────────────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // Slight delay to let Three.js CDN script execute first
    setTimeout(init, 100);
  }

})();
