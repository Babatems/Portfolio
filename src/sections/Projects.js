import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { projects } from '../data/projects';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const visibleProjects = projects.slice(0, 3);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const section = sectionRef.current;
      if (!track || !section) return;

      const getScrollDistance = () => track.scrollWidth - section.clientWidth;

      const tween = gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${getScrollDistance()}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.5,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          snap: {
            snapTo: 1 / (visibleProjects.length - 1),
            duration: 0.4,
            ease: 'power1.inOut',
          },
        },
      });

      // Layout can still settle after the initial measurement (web fonts,
      // images finishing load) — refresh so the pin distance stays accurate.
      const refresh = () => ScrollTrigger.refresh();
      document.fonts?.ready?.then(refresh);
      window.addEventListener('load', refresh);
      requestAnimationFrame(() => requestAnimationFrame(refresh));

      return () => {
        window.removeEventListener('load', refresh);
        tween.scrollTrigger?.kill();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, [visibleProjects.length]);

  return (
    <div className="flex flex-col px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[200px] 2xl:px-[250px] pt-[9vh] md:pt-[14vh]">
      <section
        ref={sectionRef}
        className="relative min-h-[520px] sm:min-h-[560px] md:min-h-[600px] lg:min-h-[640px] overflow-hidden flex flex-col"
      >
        <h1
          className="text-black font-poppins font-bold text-[28px] md:text-[36px] lg:text-[40px] leading-[36px] md:leading-[52px] lg:leading-[56px] mb-5"
          style={{ letterSpacing: "-0.4px" }}
        >
          Projects
        </h1>
        <p className="text-gray-700 font-normal font-poppins text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] mb-2 md:mb-3">
          A few things I've built
        </p>

        <div
          ref={trackRef}
          className="flex flex-nowrap items-center flex-1 will-change-transform"
        >
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="shrink-0 basis-full w-full flex flex-col lg:flex-row justify-between gap-6 md:gap-8 lg:gap-12"
            >
              {/* Image */}
                <div className="flex-shrink-0 w-full lg:w-[45%]">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-[200px] md:h-[280px] lg:h-[320px] rounded-2xl w-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-[20px] w-full lg:w-[45%] lg:justify-start">
                  <h1
                    className="font-poppins font-extrabold text-[36px] md:text-[48px] lg:text-[56px] text-black leading-[44px] md:leading-[56px] lg:leading-[64px] flex-shrink-0"
                    style={{ letterSpacing: "-2%" }}
                  >
                    {`0${project.id}`}
                  </h1>
                  <h2
                    className="font-poppins font-bold text-[24px] md:text-[32px] lg:text-[36px] text-black leading-[32px] md:leading-[40px] lg:leading-[44px] flex-shrink-0"
                    style={{ letterSpacing: "-2%" }}
                  >
                    {project.name}
                  </h2>
                  <div className="flex flex-col gap-3 min-w-0">
                    <p
                      className="font-poppins font-normal text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] lg:leading-[26px] line-clamp-5 break-words"
                    >
                      {project.description}
                    </p>
                    <p className="font-poppins font-normal text-[12px] md:text-[14px] leading-[22px] md:leading-[26px] line-clamp-2 break-words">
                      <span className="font-semibold">Tech Stack:</span> {project.techStack.join(', ')}
                    </p>
                  </div>

                  {/* Links */}
                  <div className="flex flex-row gap-6 md:gap-8 lg:gap-12 flex-wrap pt-2 flex-shrink-0">
                    <div className="flex gap-[10px] items-center whitespace-nowrap">
                      <OpenInNewIcon />
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-poppins font-normal text-[14px] md:text-[16px] leading-[22px] md:leading-[26px] text-black hover:underline"
                      >
                        View Site
                      </a>
                    </div>
                    <div className="flex gap-[10px] items-center whitespace-nowrap">
                      <GitHubIcon />
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-poppins font-normal text-[14px] md:text-[16px] leading-[22px] md:leading-[26px] text-black hover:underline"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
            </div>
          ))}
        </div>
      </section>

      {/* See All Projects CTA */}
      <div className="flex justify-center mt-6 md:mt-8 lg:mt-10">
        <Link
          to="/projects"
          className="group flex items-center gap-3 border-2 border-black px-8 py-4 font-poppins font-semibold text-[15px] md:text-[17px] text-black hover:bg-black hover:text-white transition-all duration-300"
        >
          See All Projects
          <ArrowForwardIcon className="transition-transform duration-300 group-hover:translate-x-1" style={{ fontSize: '20px' }} />
        </Link>
      </div>
    </div>
  );
}
