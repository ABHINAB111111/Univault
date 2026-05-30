import React, { useEffect, useRef, useCallback } from 'react';

/* ─────────────────────────────────────────────────────────────
   CANVAS HOOK: auto-resizes, runs animation loop
   ───────────────────────────────────────────────────────────── */
function useCanvas(draw) {
  const ref = useRef(null);
  const drawRef = useRef(draw);
  drawRef.current = draw;

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    let t = 0;

    const setSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      canvas.width  = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    setSize();
    const ro = new ResizeObserver(setSize);
    ro.observe(canvas);

    const loop = () => {
      t++;
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      drawRef.current(ctx, canvas.offsetWidth, canvas.offsetHeight, t);
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);

  return ref;
}

/* ─────────────────────────────────────────────────────────────
   DRAW: Photorealistic 3-D metallic gear
   ───────────────────────────────────────────────────────────── */
function drawGear(ctx, cx, cy, outerR, innerR, teeth, angle, alpha = 1) {
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.translate(cx, cy);
  ctx.rotate(angle);

  const toothW  = (Math.PI * 2) / (teeth * 2);
  const bevel   = (outerR - innerR) * 0.1;
  const holeR   = innerR * 0.32;
  const hubR    = innerR * 0.55;

  // ── Build gear outline path ──────────────────────────────────
  const path = new Path2D();
  for (let i = 0; i < teeth; i++) {
    const a0 = i * 2 * toothW;
    const a1 = a0 + toothW * 0.3;
    const a2 = a0 + toothW * 0.7;
    const a3 = a0 + toothW;
    const a4 = a0 + toothW * 1.3;

    if (i === 0) path.moveTo(Math.cos(a0) * innerR, Math.sin(a0) * innerR);
    path.lineTo(Math.cos(a0) * innerR, Math.sin(a0) * innerR);
    path.lineTo(Math.cos(a1) * outerR, Math.sin(a1) * outerR);
    path.lineTo(Math.cos(a2) * outerR, Math.sin(a2) * outerR);
    path.lineTo(Math.cos(a3) * innerR, Math.sin(a3) * innerR);
    // small arc along the valley
    const midA = (a3 + a4) * 0.5;
    path.quadraticCurveTo(
      Math.cos(midA) * (innerR - bevel * 2), Math.sin(midA) * (innerR - bevel * 2),
      Math.cos(a4)  * innerR, Math.sin(a4) * innerR
    );
  }
  path.closePath();

  // ── 3-D body fill: radial gradient off-center for directional light ──
  const lightX = -outerR * 0.45;
  const lightY = -outerR * 0.50;
  const bodyGrad = ctx.createRadialGradient(lightX, lightY, outerR * 0.05, 0, 0, outerR * 1.1);
  bodyGrad.addColorStop(0.00, '#d4d4e0');
  bodyGrad.addColorStop(0.15, '#9090a8');
  bodyGrad.addColorStop(0.35, '#484858');
  bodyGrad.addColorStop(0.55, '#28282e');
  bodyGrad.addColorStop(0.75, '#343440');
  bodyGrad.addColorStop(1.00, '#0c0c14');

  ctx.shadowColor   = 'rgba(0,0,0,0.95)';
  ctx.shadowBlur    = outerR * 0.22;
  ctx.shadowOffsetX = outerR * 0.05;
  ctx.shadowOffsetY = outerR * 0.08;
  ctx.fillStyle = bodyGrad;
  ctx.fill(path);
  ctx.shadowColor = 'transparent';

  // ── Bevel / rim highlight ────────────────────────────────────
  const rimGrad = ctx.createLinearGradient(-outerR, -outerR, outerR * 0.7, outerR * 0.7);
  rimGrad.addColorStop(0,   'rgba(255,255,255,0.35)');
  rimGrad.addColorStop(0.4, 'rgba(255,255,255,0.08)');
  rimGrad.addColorStop(1,   'rgba(0,0,0,0.5)');
  ctx.strokeStyle = rimGrad;
  ctx.lineWidth   = bevel * 1.8;
  ctx.stroke(path);

  // ── Specular sheen on face ────────────────────────────────────
  const sheen = ctx.createRadialGradient(lightX * 0.7, lightY * 0.7, 0, 0, 0, outerR);
  sheen.addColorStop(0,    'rgba(255,255,255,0.18)');
  sheen.addColorStop(0.45, 'rgba(255,255,255,0.04)');
  sheen.addColorStop(1,    'rgba(0,0,0,0)');
  ctx.fillStyle = sheen;
  ctx.fill(path);

  // ── Punch out spoke slots ─────────────────────────────────────
  const spokeN  = 5;
  const spokeRd = innerR * 0.60;
  const slotRx  = innerR * 0.16;
  const slotRy  = innerR * 0.10;

  ctx.save();
  ctx.globalCompositeOperation = 'destination-out';
  for (let s = 0; s < spokeN; s++) {
    const sa = (s / spokeN) * Math.PI * 2 + Math.PI / spokeN;
    ctx.beginPath();
    ctx.ellipse(
      Math.cos(sa) * spokeRd, Math.sin(sa) * spokeRd,
      slotRx, slotRy, sa, 0, Math.PI * 2
    );
    ctx.fill();
  }
  ctx.restore();

  // ── Spoke-slot inner-edge shading ────────────────────────────
  for (let s = 0; s < spokeN; s++) {
    const sa = (s / spokeN) * Math.PI * 2 + Math.PI / spokeN;
    const sx = Math.cos(sa) * spokeRd;
    const sy = Math.sin(sa) * spokeRd;
    const sg = ctx.createRadialGradient(sx - slotRx * 0.4, sy - slotRy * 0.4, 1, sx, sy, slotRx * 1.5);
    sg.addColorStop(0, 'rgba(200,200,220,0.18)');
    sg.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = sg;
    ctx.beginPath();
    ctx.ellipse(sx, sy, slotRx * 1.1, slotRy * 1.1, sa, 0, Math.PI * 2);
    ctx.fill();
  }

  // ── Hub ring ────────────────────────────────────────────────
  const hubGrad = ctx.createRadialGradient(-hubR * 0.4, -hubR * 0.45, 1, 0, 0, hubR);
  hubGrad.addColorStop(0.0, '#b8b8cc');
  hubGrad.addColorStop(0.3, '#606070');
  hubGrad.addColorStop(0.7, '#1e1e28');
  hubGrad.addColorStop(1.0, '#0a0a10');

  ctx.shadowColor = 'rgba(0,0,0,0.7)';
  ctx.shadowBlur  = hubR * 0.4;
  ctx.beginPath();
  ctx.arc(0, 0, hubR, 0, Math.PI * 2);
  ctx.fillStyle = hubGrad;
  ctx.fill();
  ctx.shadowColor = 'transparent';

  // Hub bevel ring
  const hubRim = ctx.createLinearGradient(-hubR, -hubR, hubR, hubR);
  hubRim.addColorStop(0,   'rgba(255,255,255,0.28)');
  hubRim.addColorStop(0.5, 'rgba(255,255,255,0.06)');
  hubRim.addColorStop(1,   'rgba(0,0,0,0.4)');
  ctx.strokeStyle = hubRim;
  ctx.lineWidth   = hubR * 0.12;
  ctx.beginPath();
  ctx.arc(0, 0, hubR, 0, Math.PI * 2);
  ctx.stroke();

  // ── Center bolt ──────────────────────────────────────────────
  const boltG = ctx.createRadialGradient(-holeR * 0.35, -holeR * 0.4, 0, 0, 0, holeR);
  boltG.addColorStop(0,   '#e8e8f0');
  boltG.addColorStop(0.4, '#808090');
  boltG.addColorStop(1,   '#1a1a24');
  ctx.beginPath();
  ctx.arc(0, 0, holeR, 0, Math.PI * 2);
  ctx.fillStyle = boltG;
  ctx.fill();

  // Bolt specular dot
  const boltSpec = ctx.createRadialGradient(-holeR * 0.28, -holeR * 0.32, 0, -holeR * 0.28, -holeR * 0.32, holeR * 0.65);
  boltSpec.addColorStop(0, 'rgba(255,255,255,0.9)');
  boltSpec.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = boltSpec;
  ctx.beginPath();
  ctx.arc(0, 0, holeR, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

/* ─────────────────────────────────────────────────────────────
   DRAW: Photorealistic 3-D piston + cylinder + connecting rod
   ───────────────────────────────────────────────────────────── */
function drawPistonAssembly(ctx, cx, cy, r, strokeH, pistonOffset, alpha = 1) {
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.translate(cx, cy);

  const wallT   = r * 0.20;          // cylinder wall thickness
  const pistonH = r * 0.52;          // piston crown height
  const rodW    = r * 0.20;          // connecting rod width
  const capH    = r * 0.28;          // top end-cap height
  const innerR  = r - wallT;         // cylinder bore radius
  const pistonY = strokeH * 0.08 + pistonOffset; // piston crown Y

  // ══ CYLINDER OUTER BODY ═══════════════════════════════════════
  const shellGrad = ctx.createLinearGradient(-r, 0, r, 0);
  shellGrad.addColorStop(0.00, '#080810');
  shellGrad.addColorStop(0.06, '#303040');
  shellGrad.addColorStop(0.18, '#686878');
  shellGrad.addColorStop(0.35, '#b0b0c0');
  shellGrad.addColorStop(0.50, '#d8d8e8');
  shellGrad.addColorStop(0.65, '#b0b0c0');
  shellGrad.addColorStop(0.82, '#686878');
  shellGrad.addColorStop(0.94, '#303040');
  shellGrad.addColorStop(1.00, '#080810');

  ctx.shadowColor   = 'rgba(0,0,0,0.95)';
  ctx.shadowBlur    = r * 0.3;
  ctx.shadowOffsetX = r * 0.06;
  ctx.shadowOffsetY = r * 0.1;
  ctx.fillStyle     = shellGrad;
  ctx.beginPath();
  ctx.roundRect(-r, 0, r * 2, strokeH, [r * 0.06, r * 0.06, r * 0.06, r * 0.06]);
  ctx.fill();
  ctx.shadowColor = 'transparent';

  // Edge highlights (left & right bright lines)
  const leftLine = ctx.createLinearGradient(-r, 0, -r + r * 0.06, strokeH);
  leftLine.addColorStop(0,   'rgba(255,255,255,0.22)');
  leftLine.addColorStop(0.5, 'rgba(255,255,255,0.08)');
  leftLine.addColorStop(1,   'rgba(255,255,255,0.0)');
  ctx.fillStyle = leftLine;
  ctx.fillRect(-r, 0, r * 0.06, strokeH);

  const rightLine = ctx.createLinearGradient(r, 0, r - r * 0.06, strokeH);
  rightLine.addColorStop(0,   'rgba(255,255,255,0.12)');
  rightLine.addColorStop(1,   'rgba(255,255,255,0.0)');
  ctx.fillStyle = rightLine;
  ctx.fillRect(r - r * 0.06, 0, r * 0.06, strokeH);

  // Barrel rib rings (horizontal texture bands)
  for (let ri = 0; ri < 7; ri++) {
    const ry = (ri + 0.5) / 7 * strokeH;
    const ribG = ctx.createLinearGradient(-r, ry, r, ry);
    ribG.addColorStop(0,   'rgba(255,255,255,0)');
    ribG.addColorStop(0.08,'rgba(255,255,255,0.15)');
    ribG.addColorStop(0.5, 'rgba(255,255,255,0.05)');
    ribG.addColorStop(0.92,'rgba(255,255,255,0.15)');
    ribG.addColorStop(1,   'rgba(255,255,255,0)');
    ctx.strokeStyle = ribG;
    ctx.lineWidth   = 1.2;
    ctx.beginPath();
    ctx.moveTo(-r + r * 0.06, ry);
    ctx.lineTo( r - r * 0.06, ry);
    ctx.stroke();
  }

  // ══ BORE DARKNESS (inner cavity) ══════════════════════════════
  const boreGrad = ctx.createLinearGradient(-innerR, 0, innerR, 0);
  boreGrad.addColorStop(0,   'rgba(0,0,0,0.95)');
  boreGrad.addColorStop(0.12,'rgba(0,0,0,0.6)');
  boreGrad.addColorStop(0.5, 'rgba(10,10,18,0.3)');
  boreGrad.addColorStop(0.88,'rgba(0,0,0,0.6)');
  boreGrad.addColorStop(1,   'rgba(0,0,0,0.95)');
  ctx.fillStyle = boreGrad;
  ctx.fillRect(-innerR, 0, innerR * 2, strokeH);

  // ══ TOP END CAP ════════════════════════════════════════════════
  const capGrad = ctx.createLinearGradient(-r, -capH, r, capH * 0.5);
  capGrad.addColorStop(0.0,  '#080810');
  capGrad.addColorStop(0.15, '#383848');
  capGrad.addColorStop(0.35, '#9090a8');
  capGrad.addColorStop(0.55, '#c8c8d8');
  capGrad.addColorStop(0.75, '#787888');
  capGrad.addColorStop(1.0,  '#0c0c18');

  ctx.shadowColor = 'rgba(0,0,0,0.8)';
  ctx.shadowBlur  = r * 0.2;
  ctx.fillStyle   = capGrad;
  ctx.beginPath();
  ctx.roundRect(-r, -capH, r * 2, capH + r * 0.08, [r * 0.08, r * 0.08, 0, 0]);
  ctx.fill();

  // Cap specular highlight
  const capSpec = ctx.createRadialGradient(-r * 0.4, -capH * 0.8, 0, 0, -capH * 0.4, r);
  capSpec.addColorStop(0,   'rgba(255,255,255,0.45)');
  capSpec.addColorStop(0.5, 'rgba(255,255,255,0.1)');
  capSpec.addColorStop(1,   'rgba(255,255,255,0)');
  ctx.fillStyle   = capSpec;
  ctx.shadowColor = 'transparent';
  ctx.beginPath();
  ctx.roundRect(-r, -capH, r * 2, capH + r * 0.08, [r * 0.08, r * 0.08, 0, 0]);
  ctx.fill();

  // ══ PISTON CROWN ═══════════════════════════════════════════════
  const pGrad = ctx.createLinearGradient(-innerR, pistonY, innerR, pistonY + pistonH);
  pGrad.addColorStop(0.0,  '#181820');
  pGrad.addColorStop(0.08, '#505060');
  pGrad.addColorStop(0.25, '#a8a8bc');
  pGrad.addColorStop(0.5,  '#d0d0e0');
  pGrad.addColorStop(0.75, '#a8a8bc');
  pGrad.addColorStop(0.92, '#505060');
  pGrad.addColorStop(1.0,  '#181820');

  ctx.shadowColor   = 'rgba(0,0,0,0.8)';
  ctx.shadowBlur    = r * 0.15;
  ctx.fillStyle     = pGrad;
  ctx.beginPath();
  ctx.roundRect(-innerR * 0.95, pistonY, innerR * 1.9, pistonH, r * 0.05);
  ctx.fill();
  ctx.shadowColor = 'transparent';

  // Piston ring grooves (3 rings)
  for (let ring = 0; ring < 3; ring++) {
    const ry    = pistonY + pistonH * (0.18 + ring * 0.28);
    const rGrad = ctx.createLinearGradient(-innerR, ry, innerR, ry);
    rGrad.addColorStop(0,   'rgba(0,0,0,0)');
    rGrad.addColorStop(0.15,'rgba(0,0,0,0.75)');
    rGrad.addColorStop(0.5, 'rgba(0,0,0,0.9)');
    rGrad.addColorStop(0.85,'rgba(0,0,0,0.75)');
    rGrad.addColorStop(1,   'rgba(0,0,0,0)');
    ctx.strokeStyle = rGrad;
    ctx.lineWidth   = 2.5;
    ctx.beginPath();
    ctx.moveTo(-innerR * 0.9, ry);
    ctx.lineTo( innerR * 0.9, ry);
    ctx.stroke();

    // Ring highlight above groove
    const rhGrad = ctx.createLinearGradient(-innerR, ry - 3, innerR, ry - 3);
    rhGrad.addColorStop(0,   'rgba(255,255,255,0)');
    rhGrad.addColorStop(0.2, 'rgba(255,255,255,0.2)');
    rhGrad.addColorStop(0.5, 'rgba(255,255,255,0.35)');
    rhGrad.addColorStop(0.8, 'rgba(255,255,255,0.2)');
    rhGrad.addColorStop(1,   'rgba(255,255,255,0)');
    ctx.strokeStyle = rhGrad;
    ctx.lineWidth   = 1;
    ctx.beginPath();
    ctx.moveTo(-innerR * 0.9, ry - 2.5);
    ctx.lineTo( innerR * 0.9, ry - 2.5);
    ctx.stroke();
  }

  // Piston crown specular
  const pSpec = ctx.createRadialGradient(-innerR * 0.2, pistonY + pistonH * 0.22, 0, 0, pistonY + pistonH * 0.5, innerR);
  pSpec.addColorStop(0,   'rgba(255,255,255,0.5)');
  pSpec.addColorStop(0.4, 'rgba(255,255,255,0.12)');
  pSpec.addColorStop(1,   'rgba(255,255,255,0)');
  ctx.fillStyle = pSpec;
  ctx.beginPath();
  ctx.roundRect(-innerR * 0.95, pistonY, innerR * 1.9, pistonH, r * 0.05);
  ctx.fill();

  // ══ CONNECTING ROD ════════════════════════════════════════════
  const rodTop = pistonY + pistonH;
  const rodBot = strokeH + pistonH * 0.8;
  const rodGrad = ctx.createLinearGradient(-rodW, rodTop, rodW, rodTop);
  rodGrad.addColorStop(0,   '#0c0c14');
  rodGrad.addColorStop(0.2, '#404050');
  rodGrad.addColorStop(0.5, '#b8b8c8');
  rodGrad.addColorStop(0.8, '#404050');
  rodGrad.addColorStop(1,   '#0c0c14');

  ctx.shadowColor   = 'rgba(0,0,0,0.7)';
  ctx.shadowBlur    = r * 0.1;
  ctx.fillStyle     = rodGrad;
  ctx.beginPath();
  ctx.roundRect(-rodW / 2, rodTop, rodW, rodBot - rodTop, rodW * 0.5);
  ctx.fill();
  ctx.shadowColor = 'transparent';

  // Rod centre specular line
  ctx.fillStyle = 'rgba(255,255,255,0.22)';
  ctx.fillRect(-rodW * 0.1, rodTop, rodW * 0.15, rodBot - rodTop);

  // ══ CRANKPIN BEARING ══════════════════════════════════════════
  const bR  = rodW * 1.3;
  const bY  = rodBot;
  const bGrad = ctx.createRadialGradient(-bR * 0.35, bY - bR * 0.35, 1, 0, bY, bR);
  bGrad.addColorStop(0,   '#c8c8d8');
  bGrad.addColorStop(0.35,'#686878');
  bGrad.addColorStop(0.75,'#1c1c24');
  bGrad.addColorStop(1,   '#060608');
  ctx.beginPath();
  ctx.arc(0, bY, bR, 0, Math.PI * 2);
  ctx.fillStyle = bGrad;
  ctx.fill();

  const bSpec = ctx.createRadialGradient(-bR * 0.28, bY - bR * 0.32, 0, 0, bY, bR);
  bSpec.addColorStop(0,   'rgba(255,255,255,0.65)');
  bSpec.addColorStop(0.4, 'rgba(255,255,255,0.12)');
  bSpec.addColorStop(1,   'rgba(255,255,255,0)');
  ctx.fillStyle = bSpec;
  ctx.beginPath();
  ctx.arc(0, bY, bR, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

/* ─────────────────────────────────────────────────────────────
   EXPORTED: Gears canvas component
   ───────────────────────────────────────────────────────────── */
export const Gears = () => {
  const draw = (ctx, W, H, t) => {
    const spd = t * 0.28 * (Math.PI / 180);

    // Large gear — top-right, partially cropped
    const g1R = Math.min(W, H) * 0.50;
    drawGear(ctx, W * 0.86, H * -0.02, g1R, g1R * 0.60, 22, spd * 0.4, 0.38);

    // Medium gear — bottom-left, counter-rotating
    const g2R = g1R * 0.55;
    drawGear(ctx, W * 0.02, H * 1.08, g2R, g2R * 0.60, 13,
      -spd * 0.4 * (g1R / g2R), 0.28);

    // Small gear — mid-right
    const g3R = g1R * 0.30;
    drawGear(ctx, W * 0.72, H * 0.60, g3R, g3R * 0.58, 10,
      -spd * 1.0, 0.20);
  };

  const ref = useCanvas(draw);
  return (
    <canvas ref={ref} style={{
      position: 'absolute', inset: 0,
      width: '100%', height: '100%',
      pointerEvents: 'none', zIndex: 0,
    }} />
  );
};

/* ─────────────────────────────────────────────────────────────
   EXPORTED: Piston canvas component
   ───────────────────────────────────────────────────────────── */
export const Piston = () => {
  const draw = (ctx, W, H, t) => {
    const theta1 = t * 0.020;
    const theta2 = theta1 + Math.PI;
    const crR    = 1, conL = 3.8;

    // Slider-crank kinematics (non-sinusoidal, TDC-biased)
    const p1 = crR * Math.cos(theta1) + (crR * crR * Math.sin(theta1) ** 2) / (2 * conL);
    const p2 = crR * Math.cos(theta2) + (crR * crR * Math.sin(theta2) ** 2) / (2 * conL);

    const cylR   = Math.min(W, H) * 0.115;
    const stroke = cylR * 2.6;
    const travel = cylR * 0.9;

    // Right piston (primary)
    drawPistonAssembly(ctx, W * 0.80, H * 0.04, cylR, stroke, p1 * travel * 0.5 + travel * 0.45, 0.42);

    // Left piston (secondary, 180° out of phase, slightly smaller)
    drawPistonAssembly(ctx, W * 0.18, H * 0.18, cylR * 0.82, stroke * 0.92,
      p2 * travel * 0.5 + travel * 0.45, 0.30);
  };

  const ref = useCanvas(draw);
  return (
    <canvas ref={ref} style={{
      position: 'absolute', inset: 0,
      width: '100%', height: '100%',
      pointerEvents: 'none', zIndex: 0,
    }} />
  );
};
