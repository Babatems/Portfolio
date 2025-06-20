import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "XIVBrand E-commerce Website",
      url: "https://thexivbrand.netlify.app",
      github: "https://github.com/Babatems/E-Commerce-Website",
      image: "/images/thexivbrand.png",
      description: "A modern and responsive e-commerce website built for XIVBrand, featuring product listings, a shopping cart system, and a clean, user-friendly design. The site emphasizes smooth navigation, interactive UI elements, and a minimal aesthetic tailored for a fashion brand.",
      techStack: "HTML, JavaScript, CSS"
    },
    {
      id: 2,
      name: "TouringCars",
      url: "https://touringcars.netlify.app",
      github: "https://github.com/Babatems/Touring-cars",
      image: "/images/touringcars.png",
      description: "A clean and welcoming landing page designed for RCCG Word Aglow Parish. The page highlights key information such as service times, location, and church mission, with smooth scrolling and responsive design for all devices. Built to reflect the church’s spiritual message and encourage community engagement.",
      techStack: "React, Tailwind CSS"
    },
    {
      id: 3,
      name: "Travling!",
      url: "https://travlingg.netlify.app",
      github: "https://github.com/Babatems/Travling",
      image: "/images/Travling.png",
      description: "Travling is a sleek and user-friendly landing page that allows users to discover exciting vacation destinations, book hotel accommodations, and purchase flight tickets—all in one place.",
      techStack: "React, Tailwind CSS"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col px-4 md:px-[250px] pt-[9vh] md:py-[14vh]">
      <h1
        className="text-black font-poppins font-bold text-[28px] md:text-[36px] leading-[36px] md:leading-[52px] mb-5"
        style={{ letterSpacing: "-0.4px" }}
      >
        Projects
      </h1>
      <p className="text-gray-700 font-normal font-poppins text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] mb-[40px] md:mb-[60px]">
        A few things I've built
      </p>
      <div className="flex flex-col gap-[4rem] md:gap-[10rem]">
        {projects.map((project) => (
          <div key={project.id} className="flex flex-col md:flex-row justify-between w-full md:h-[300px] h-auto gap-10">
            {/* Image */}
            <img
              src={project.image}
              alt={`Project ${project.id}`}
              className="h-[200px] md:h-[300px] rounded-2xl w-full md:w-auto object-cover"
            />

            {/* Content */}
            <div className="flex flex-col gap-[20px] max-w-full md:max-w-[600px]">
              <h1
                className="font-poppins font-extrabold text-[36px] md:text-[48px] text-black leading-[44px] md:leading-[56px]"
                style={{ letterSpacing: "-2%" }}
              >
                {`0${project.id}`}
              </h1>
              <h2
                className="font-poppins font-bold text-[24px] md:text-[32px] text-black leading-[32px] md:leading-[40px]"
                style={{ letterSpacing: "-2%" }}
              >
                {project.name}
              </h2>
              <div className="flex flex-col gap-3">
                <p
                  className="font-poppins font-normal text-[14px] md:text-[16px] leading-[22px] md:leading-[24px]"
                  style={{ letterSpacing: "2%" }}
                >
                  {project.description}
                </p>
                <p className="font-poppins font-normal text-[12px] md:text-[14px] leading-[22px] md:leading-[26px]">
                  <span className="font-semibold">Tech Stack:</span> {project.techStack}
                </p>
              </div>

              {/* Links */}
              <div className="flex flex-row gap-6 md:gap-12">
                <div className="flex gap-[10px] items-center">
                  <OpenInNewIcon />
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-poppins font-normal text-[14px] md:text-[16px] leading-[22px] md:leading-[26px] text-black hover:underline"
                  >
                    Live Preview
                  </a>
                </div>

                <div className="flex gap-[10px] items-center">
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
    </div>
  );
}