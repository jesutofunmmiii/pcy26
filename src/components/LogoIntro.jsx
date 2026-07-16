import { useEffect, useRef, useState } from 'react';

const GREEN_DARK = '#062E10', GOLD = '#FFC300', WHITE = '#FFFFFF';
const SWEEP_D = 'M0 9117c130,-2357 1670,-4577 3750,-5649 715,-368 2215,-909 3005,-918 47,0 119,-23 107,44 -854,457 -1625,1224 -2183,2016 -937,1331 -1383,2878 -1397,4507l-3282 0z';
const PANEL_D = 'M8738 80l0 6266 -1577 0 0 -4539c0,-121 -559,-28 -655,-16 -1169,155 -2348,580 -3380,1138 -212,114 -420,304 -654,348l0 -3133c0,-4 60,-64 64,-64l6202 0z';
const VB_W = 8738, VB_H = 9117;

const rise = (t) => { t = Math.max(0, Math.min(1, t)); return 1 - Math.pow(1 - t, 4); };
const phase = (p, a, b) => rise((p - a) / (b - a));
const lerp = (a, b, t) => a + (b - a) * t;

const BUILD_MS = 2600, HOLD_MS = 400, FADE_MS = 600;

export default function LogoIntro({ onDone }) {
  const [p, setP] = useState(0);        // build progress 0..1
  const [fading, setFading] = useState(false);
  const [done, setDone] = useState(false);
  const skipRef = useRef(false);

  // Lock body scroll while the overlay is mounted; restore on unmount.
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  useEffect(() => {
    let raf, start;
    const tick = (now) => {
      if (start === undefined) start = now;
      const t = Math.min(1, (now - start) / BUILD_MS);
      setP(t);
      if (t < 1 && !skipRef.current) raf = requestAnimationFrame(tick);
      else {
        setP(1);
        setTimeout(() => setFading(true), skipRef.current ? 0 : HOLD_MS);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (!fading) return;
    const t = setTimeout(() => {
      sessionStorage.setItem('fpdi_intro_seen', '1');
      setDone(true);
      onDone?.();          // let the parent unmount so body scroll is restored
    }, FADE_MS);
    return () => clearTimeout(t);
  }, [fading, onDone]);

  if (done) return null;

  // 'Path draws': white sweep rises in from the ground, gold panel follows.
  const settleScale = lerp(0.965, 1, rise(p));
  const sp = phase(p, 0.04, 0.55);
  const sweepClip = 1 - sp;
  const sweepDy = (1 - sp) * 600;
  const sweepOp = phase(p, 0.04, 0.20);
  const pp = phase(p, 0.46, 0.86);
  const panelDy = (1 - pp) * 950;
  const panelOp = phase(p, 0.46, 0.64);

  const h = 'min(50vh, 60vw)';           // responsive emblem height
  const clipY = sweepClip * (VB_H + 400) - 200;

  return (
    <div
      onClick={() => { skipRef.current = true; setFading(true); }}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999, background: GREEN_DARK,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        opacity: fading ? 0 : 1,
        transition: `opacity ${FADE_MS}ms cubic-bezier(0.16,1,0.3,1)`,
        cursor: 'pointer',
      }}
      aria-hidden="true"
    >
      <svg
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        style={{ height: h, width: 'auto', overflow: 'visible',
                 transform: `scale(${settleScale})` }}
      >
        <defs>
          <clipPath id="fpdiIntroClip">
            <rect x="-300" y={clipY} width={VB_W + 600} height={VB_H + 600} />
          </clipPath>
        </defs>
        <path fill={GOLD} d={PANEL_D} opacity={panelOp}
              transform={`translate(0 ${panelDy})`} />
        <g clipPath="url(#fpdiIntroClip)">
          <path fill={WHITE} d={SWEEP_D} opacity={sweepOp}
                transform={`translate(0 ${sweepDy})`} />
        </g>
      </svg>
    </div>
  );
}
