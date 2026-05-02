import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import NavBar from '../NavBar';
import Footer from '../sections/Footer';
import { projects } from '../data/projects';

export default function ProjectsPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`bg-[#E5E5E5] min-h-screen flex flex-col transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <NavBar />

      <div className="flex-1 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[200px] 2xl:px-[250px] pt-[5vh] pb-[10vh]">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-poppins font-medium text-[14px] md:text-[16px] text-gray-500 hover:text-black transition-colors duration-200 mb-10 group"
        >
          <ArrowBackIcon className="transition-transform duration-200 group-hover:-translate-x-1" style={{ fontSize: '18px' }} />
          Back to Home
        </Link>

        {/* Header */}
        <h1
          className="text-black font-poppins font-bold text-[32px] md:text-[48px] lg:text-[56px] leading-[40px] md:leading-[58px] lg:leading-[66px] mb-4"
          style={{ letterSpacing: '-0.4px' }}
        >
          All Projects
        </h1>
        <p className="text-gray-700 font-normal font-poppins text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] mb-[50px] md:mb-[70px]">
          Everything I've built
        </p>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-black transition-all duration-300 group"
            >
              {/* Image */}
              <div className="w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-[220px] md:h-[240px] object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 p-6 flex-1">
                <div className="flex items-start justify-between gap-4">
                  <h2
                    className="font-poppins font-bold text-[20px] md:text-[22px] text-black leading-[28px]"
                    style={{ letterSpacing: '-0.4px' }}
                  >
                    {project.name}
                  </h2>
                  <span
                    className="font-poppins font-extrabold text-[28px] text-gray-200 leading-none flex-shrink-0"
                    style={{ letterSpacing: '-2%' }}
                  >
                    {`0${project.id}`}
                  </span>
                </div>

                <p className="font-poppins font-normal text-[14px] text-gray-600 leading-[22px] line-clamp-3 flex-1">
                  {project.description}
                </p>

                <p className="font-poppins font-normal text-[12px] text-gray-500 leading-[20px]">
                  <span className="font-semibold text-gray-700">Stack:</span> {project.techStack}
                </p>

                {/* Links */}
                <div className="flex flex-row gap-6 pt-2 border-t border-gray-100">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-poppins font-medium text-[13px] text-black hover:underline"
                  >
                    <OpenInNewIcon style={{ fontSize: '16px' }} />
                    Live Preview
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-poppins font-medium text-[13px] text-black hover:underline"
                  >
                    <GitHubIcon style={{ fontSize: '16px' }} />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
