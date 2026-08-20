import { useState, useLayoutEffect } from 'react';
import { flushSync } from 'react-dom';
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';
import {
  SiGithub,
  SiGit,
  SiJavascript,
  SiReact,
  SiCss3,
  SiHtml5,
  SiTailwindcss,
  SiFirebase,
  SiFigma,
  SiClaude,
  SiAnthropic,
} from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';

gsap.registerPlugin(Flip);

const stack = [
  { label: 'Github',      Icon: SiGithub },
  { label: 'Git',         Icon: SiGit },
  { label: 'JavaScript',  Icon: SiJavascript },
  { label: 'React',       Icon: SiReact },
  { label: 'CSS',         Icon: SiCss3 },
  { label: 'HTML',        Icon: SiHtml5 },
  { label: 'Tailwind',    Icon: SiTailwindcss },
  { label: 'Firebase',    Icon: SiFirebase },
  { label: 'Figma',       Icon: SiFigma },
  { label: 'VSCode',      Icon: TbBrandVscode },
  { label: 'Claude',      Icon: SiClaude },
  { label: 'Claude Code', Icon: SiAnthropic },
];

const CARD_WIDTH = 300;
const CARD_HEIGHT = 360;
const VISIBLE_COUNT = 5;
const OFFSET = 20;
const STACK_SPAN = (VISIBLE_COUNT - 1) * OFFSET;

export default function TechStack() {
  const [items, setItems] = useState(stack);

  useLayoutEffect(() => {
    return () => {
      gsap.killTweensOf('.stack-card');
    };
  }, []);

  const handleCardClick = () => {
    const state = Flip.getState('.stack-card');

    // Flip needs the "before" and "after" DOM states to diff. setItems is
    // batched/async in React, so without flushSync the DOM wouldn't have
    // re-rendered yet by the time Flip.from reads it.
    flushSync(() => {
      setItems((prev) => {
        const next = [...prev];
        const last = next.pop();
        next.unshift(last);
        return next;
      });
    });

    Flip.from(state, {
      targets: '.stack-card',
      duration: 0.5,
      ease: 'sine.inOut',
      absolute: true,
      onEnter: (elements) =>
        gsap.from(elements, {
          duration: 0.3,
          yPercent: 20,
          opacity: 0,
          ease: 'expo.out',
        }),
      onLeave: (elements) =>
        gsap.to(elements, {
          duration: 0.3,
          yPercent: 5,
          xPercent: -5,
          transformOrigin: 'bottom left',
          opacity: 0,
          ease: 'expo.out',
        }),
    });
  };

  const visible = items.slice(0, VISIBLE_COUNT);

  return (
    <div className="min-h-screen flex flex-col md:flex-row md:items-center md:justify-between gap-10 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[200px] 2xl:px-[250px] py-[9vh] md:py-[14vh]">
      <div className="flex flex-col md:w-1/2">
        <h1
          className="text-black font-poppins font-bold text-[28px] md:text-[36px] leading-[36px] md:leading-[52px] mb-5"
          style={{ letterSpacing: '-0.4px' }}
        >
          Tech Stack
        </h1>
        <p className="text-gray-700 font-normal font-poppins text-[16px] md:text-[18px] leading-[22px] md:leading-[26px]">
          Technologies I've been working with
        </p>
      </div>

      <section className="relative flex items-center justify-center min-h-[50vh] md:min-h-[75vh] w-full md:w-1/2">
        <div
          className="relative"
          style={{
            width: CARD_WIDTH + STACK_SPAN,
            height: CARD_HEIGHT + STACK_SPAN,
          }}
        >
          {visible.map(({ label, Icon }, index) => {
            const isFront = index === 0;
            // Inverse of the earlier version: front card sits at the base
            // (bottom-left), each card further back is offset up and to
            // the right — no rotation, plain axis-aligned offsets.
            const distanceFromFront = index;

            return (
              <div
                key={label}
                className="stack-card absolute rounded border-2 border-black bg-white flex flex-col items-center justify-center gap-5"
                onClick={isFront ? handleCardClick : undefined}
                style={{
                  width: CARD_WIDTH,
                  height: CARD_HEIGHT,
                  left: distanceFromFront * OFFSET,
                  top: STACK_SPAN - distanceFromFront * OFFSET,
                  zIndex: VISIBLE_COUNT - index,
                  cursor: isFront ? 'pointer' : 'default',
                  pointerEvents: isFront ? 'auto' : 'none',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.12)',
                }}
              >
                <Icon size={96} className="text-black" />
                <p
                  className="text-black font-poppins font-bold text-[22px] leading-[28px] text-center px-2"
                  style={{ letterSpacing: '-2%' }}
                >
                  {label}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
