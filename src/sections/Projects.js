import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Projects() {
  const project1Url = "https://thexivbrand.netlify.app"
  const project1Github = "https://github.com/Babatems/E-Commerce-Website"

  return (
    <div className="min-h-screen flex flex-col px-4 md:px-[120px] py-[9vh] md:py-[14vh]">
      <h1 className="text-black font-poppins font-bold md:text-[36px] leading-[52px] mb-5"
      style={{letterSpacing: '-0.4px'}}>
        Projects
      </h1>
      <p className="text-gray-700 font-normal font-poppins text-[18px] leading-[26px] mb-[60px]">A few things I've built</p>
      <div className='flex flex-col gap-10'>
        <div className="flex flex-row justify-between w-full h-[300px]">
          {/* Image */}
          <img src="/images/icon-git.png" alt="" className="h-[300px]" />

          {/* Content */}
          <div className="flex flex-col gap-[20px] max-w-[600px]">
            <h1
              className="font-poppins font-extrabold text-[48px] text-black leading-[56px]"
              style={{ letterSpacing: "-2%" }}
            >
              01
            </h1>
            <h2
              className="font-poppins font-bold text-[32px] text-black leading-[40px]"
              style={{ letterSpacing: "-2%" }}
            >
              E-commerce website
            </h2>
            <div className="flex flex-col gap-3">
              <p
                className="font-poppins font-normal text-[16px] leading-[24px]"
                style={{ letterSpacing: "2%" }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem in
                voluptatum, ipsum repellendus earum ducimus, numquam sit magnam, labore
                reiciendis exercitationem veritatis explicabo. Earum aut ex ut, sequi
                iste voluptates.
              </p>
              <p className="font-poppins font-normal text-[14px] leading-[26px]">
                <span className="font-semibold">Tech Stack:</span> HTML, JavaScript, CSS
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-row gap-12">
              <div className="flex gap-[10px]">
                <OpenInNewIcon />
                <a
                  href={project1Url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-poppins font-normal text-[16px] leading-[26px] text-black hover:underline"
                >
                  Live Preview
                </a>
              </div>

              <div className="flex gap-[10px]">
                <GitHubIcon />
                <a
                  href={project1Github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-poppins font-normal text-[16px] leading-[26px] text-black hover:underline"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-row justify-between w-full h-[300px]">
          {/* Image */}
          <img src="/images/icon-git.png" alt="" className="h-[300px]" />

          {/* Content */}
          <div className="flex flex-col gap-[20px] max-w-[600px]">
            <h1
              className="font-poppins font-extrabold text-[48px] text-black leading-[56px]"
              style={{ letterSpacing: "-2%" }}
            >
              01
            </h1>
            <h2
              className="font-poppins font-bold text-[32px] text-black leading-[40px]"
              style={{ letterSpacing: "-2%" }}
            >
              E-commerce website
            </h2>
            <div className="flex flex-col gap-3">
              <p
                className="font-poppins font-normal text-[16px] leading-[24px]"
                style={{ letterSpacing: "2%" }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem in
                voluptatum, ipsum repellendus earum ducimus, numquam sit magnam, labore
                reiciendis exercitationem veritatis explicabo. Earum aut ex ut, sequi
                iste voluptates.
              </p>
              <p className="font-poppins font-normal text-[14px] leading-[26px]">
                <span className="font-semibold">Tech Stack:</span> HTML, JavaScript, CSS
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-row gap-12">
              <div className="flex gap-[10px]">
                <OpenInNewIcon />
                <a
                  href={project1Url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-poppins font-normal text-[16px] leading-[26px] text-black hover:underline"
                >
                  Live Preview
                </a>
              </div>

              <div className="flex gap-[10px]">
                <GitHubIcon />
                <a
                  href={project1Github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-poppins font-normal text-[16px] leading-[26px] text-black hover:underline"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between w-full h-[300px]">
          {/* Image */}
          <img src="/images/icon-git.png" alt="" className="h-[300px]" />

          {/* Content */}
          <div className="flex flex-col gap-[20px] max-w-[600px]">
            <h1
              className="font-poppins font-extrabold text-[48px] text-black leading-[56px]"
              style={{ letterSpacing: "-2%" }}
            >
              01
            </h1>
            <h2
              className="font-poppins font-bold text-[32px] text-black leading-[40px]"
              style={{ letterSpacing: "-2%" }}
            >
              E-commerce website
            </h2>
            <div className="flex flex-col gap-3">
              <p
                className="font-poppins font-normal text-[16px] leading-[24px]"
                style={{ letterSpacing: "2%" }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem in
                voluptatum, ipsum repellendus earum ducimus, numquam sit magnam, labore
                reiciendis exercitationem veritatis explicabo. Earum aut ex ut, sequi
                iste voluptates.
              </p>
              <p className="font-poppins font-normal text-[14px] leading-[26px]">
                <span className="font-semibold">Tech Stack:</span> HTML, JavaScript, CSS
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-row gap-12">
              <div className="flex gap-[10px]">
                <OpenInNewIcon />
                <a
                  href={project1Url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-poppins font-normal text-[16px] leading-[26px] text-black hover:underline"
                >
                  Live Preview
                </a>
              </div>

              <div className="flex gap-[10px]">
                <GitHubIcon />
                <a
                  href={project1Github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-poppins font-normal text-[16px] leading-[26px] text-black hover:underline"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}