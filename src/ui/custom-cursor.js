import { useEffect, useRef } from 'react';

const CURSOR_COLOR = '#000000';
const RING_LERP = 0.15;

// A small dot that tracks the mouse instantly, plus a larger ring that trails
// behind it with easing. Only activates on fine-pointer (mouse/trackpad)
// devices — touch devices keep their native cursor untouched.
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isFinePointer = window.matchMedia && window.matchMedia('(pointer: fine)').matches;
    if (isTouchDevice || !isFinePointer) {
      return undefined;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return undefined;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let hasMoved = false;
    let animationId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;

      if (!hasMoved) {
        hasMoved = true;
        ringX = mouseX;
        ringY = mouseY;
        dot.style.opacity = '1';
        ring.style.opacity = '0.7';
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * RING_LERP;
      ringY += (mouseY - ringY) * RING_LERP;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      animationId = requestAnimationFrame(animate);
    };

    const isInteractive = (el) => el?.closest?.('a, button');

    const onMouseOver = (e) => {
      if (isInteractive(e.target)) {
        ring.style.transform = 'translate(-50%, -50%) scale(1.6)';
      }
    };

    const onMouseOut = (e) => {
      if (isInteractive(e.target) && !isInteractive(e.relatedTarget)) {
        ring.style.transform = 'translate(-50%, -50%) scale(1)';
      }
    };

    // Safety net: some hybrid devices misreport `(pointer: fine)`. If an
    // actual touch ever lands, tear everything down and restore the native
    // cursor rather than leaving the dot/ring stranded at the tap point.
    const onTouchStart = () => teardown();

    const teardown = () => {
      document.body.classList.remove('cursor-none-fine');
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      window.removeEventListener('touchstart', onTouchStart);
      cancelAnimationFrame(animationId);
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    };

    document.body.classList.add('cursor-none-fine');
    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    animationId = requestAnimationFrame(animate);

    return teardown;
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] transition-opacity duration-200"
        style={{
          backgroundColor: CURSOR_COLOR,
          transform: 'translate(-50%, -50%)',
          left: '-100px',
          top: '-100px',
          opacity: 0,
        }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-[38px] h-[38px] rounded-full pointer-events-none z-[9998] transition-[opacity,transform] duration-200 ease-out"
        style={{
          border: `1.5px solid ${CURSOR_COLOR}`,
          transform: 'translate(-50%, -50%)',
          left: '-100px',
          top: '-100px',
          opacity: 0,
        }}
      />
    </>
  );
}
