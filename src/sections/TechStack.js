import GitHubIcon from '@mui/icons-material/GitHub';
import JavascriptIcon from '@mui/icons-material/Javascript';
import CssIcon from '@mui/icons-material/Css';
import HtmlIcon from '@mui/icons-material/Html';
import ReactIcon from '@mui/icons-material/Code'; // Replace with a React-specific icon if available
import TailwindIcon from '@mui/icons-material/Style'; // Replace with a Tailwind-specific icon if available
import FirebaseIcon from '@mui/icons-material/Cloud'; // Replace with a Firebase-specific icon if available
import FigmaIcon from '@mui/icons-material/DesignServices'; // Replace with a Figma-specific icon if available
import VSCodeIcon from '@mui/icons-material/Terminal'; // Replace with a VSCode-specific icon if available

export default function TechStack() {
  return (
    <div className="min-h-screen flex flex-col px-4 md:px-[250px] py-[9vh] md:py-[14vh]">
      <h1 className="text-black font-poppins font-bold text-[28px] md:text-[36px] leading-[36px] md:leading-[52px] mb-5"
        style={{letterSpacing: '-0.4px'}}
      >
        Tech Stack
      </h1>
      <p className="text-gray-700 font-normal font-poppins text-[16px] md:text-[18px] leading-[22px] md:leading-[26px] mb-[40px] md:mb-[60px]">
        Technologies I've been working with
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-[20px] sm:gap-[30px] md:gap-[40px] justify-center items-center">
        <div className="group w-full h-[150px] sm:h-[186px] rounded border-2 border-black flex flex-col items-center justify-center gap-[16px] sm:gap-[24px] md:gap-[32px] transition-all duration-300 hover:bg-black">
          <GitHubIcon className="size-11 text-black group-hover:text-white transition-all duration-300" />
          <p className="text-black font-poppins font-bold text-[16px] sm:text-[18px] md:text-[20px] leading-[20px] sm:leading-[22px] md:leading-[24%] group-hover:text-white transition-all duration-300"
            style={{ letterSpacing: "-2%" }}
          >
            Github
          </p>
        </div>

        <div className="group w-full h-[150px] sm:h-[186px] rounded border-2 border-black flex flex-col items-center justify-center gap-[16px] sm:gap-[24px] md:gap-[32px] transition-all duration-300 hover:bg-black">
          <GitHubIcon className="w-11 h-11 text-black group-hover:text-white transition-all duration-300" />
          <p className="text-black font-poppins font-bold text-[16px] sm:text-[18px] md:text-[20px] leading-[20px] sm:leading-[22px] md:leading-[24%] group-hover:text-white transition-all duration-300"
            style={{ letterSpacing: "-2%" }}
          >
            Git
          </p>
        </div>

        <div className="group w-full h-[150px] sm:h-[186px] rounded border-2 border-black flex flex-col items-center justify-center gap-[16px] sm:gap-[24px] md:gap-[32px] transition-all duration-300 hover:bg-black">
          <JavascriptIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 text-black group-hover:text-white transition-all duration-300" />
          <p className="text-black font-poppins font-bold text-[16px] sm:text-[18px] md:text-[20px] leading-[20px] sm:leading-[22px] md:leading-[24%] group-hover:text-white transition-all duration-300"
            style={{ letterSpacing: "-2%" }}
          >
            Javascript
          </p>
        </div>
        
        <div className="group w-full h-[150px] sm:h-[186px] rounded border-2 border-black flex flex-col items-center justify-center gap-[16px] sm:gap-[24px] md:gap-[32px] transition-all duration-300 hover:bg-black">
          <ReactIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 text-black group-hover:text-white transition-all duration-300" />
          <p className="text-black font-poppins font-bold text-[16px] sm:text-[18px] md:text-[20px] leading-[20px] sm:leading-[22px] md:leading-[24%] group-hover:text-white transition-all duration-300"
            style={{ letterSpacing: "-2%" }}
          >
            React
          </p>
        </div>

        <div className="group w-full h-[150px] sm:h-[186px] rounded border-2 border-black flex flex-col items-center justify-center gap-[16px] sm:gap-[24px] md:gap-[32px] transition-all duration-300 hover:bg-black">
          <CssIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 text-black group-hover:text-white transition-all duration-300" />
          <p className="text-black font-poppins font-bold text-[16px] sm:text-[18px] md:text-[20px] leading-[20px] sm:leading-[22px] md:leading-[24%] group-hover:text-white transition-all duration-300"
            style={{ letterSpacing: "-2%" }}
          >
            CSS
          </p>
        </div>

        <div className="group w-full h-[150px] sm:h-[186px] rounded border-2 border-black flex flex-col items-center justify-center gap-[16px] sm:gap-[24px] md:gap-[32px] transition-all duration-300 hover:bg-black">
          <HtmlIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 text-black group-hover:text-white transition-all duration-300" />
          <p className="text-black font-poppins font-bold text-[16px] sm:text-[18px] md:text-[20px] leading-[20px] sm:leading-[22px] md:leading-[24%] group-hover:text-white transition-all duration-300"
            style={{ letterSpacing: "-2%" }}
          >
            HTML
          </p>
        </div>

        <div className="group w-full h-[150px] sm:h-[186px] rounded border-2 border-black flex flex-col items-center justify-center gap-[16px] sm:gap-[24px] md:gap-[32px] transition-all duration-300 hover:bg-black">
          <TailwindIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 text-black group-hover:text-white transition-all duration-300" />
          <p className="text-black font-poppins font-bold text-[16px] sm:text-[18px] md:text-[20px] leading-[20px] sm:leading-[22px] md:leading-[24%] group-hover:text-white transition-all duration-300"
            style={{ letterSpacing: "-2%" }}
          >
            Tailwind
          </p>
        </div>

        <div className="group w-full h-[150px] sm:h-[186px] rounded border-2 border-black flex flex-col items-center justify-center gap-[16px] sm:gap-[24px] md:gap-[32px] transition-all duration-300 hover:bg-black">
          <FirebaseIcon className="w-11 h-11 text-black group-hover:text-white transition-all duration-300" />
          <p className="text-black font-poppins font-bold text-[16px] sm:text-[18px] md:text-[20px] leading-[20px] sm:leading-[22px] md:leading-[24%] group-hover:text-white transition-all duration-300"
            style={{ letterSpacing: "-2%" }}
          >
            Firebase
          </p>
        </div>

        <div className="group w-full h-[150px] sm:h-[186px] rounded border-2 border-black flex flex-col items-center justify-center gap-[16px] sm:gap-[24px] md:gap-[32px] transition-all duration-300 hover:bg-black">
          <FigmaIcon className="w-11 h-11 text-black group-hover:text-white transition-all duration-300" />
          <p className="text-black font-poppins font-bold text-[16px] sm:text-[18px] md:text-[20px] leading-[20px] sm:leading-[22px] md:leading-[24%] group-hover:text-white transition-all duration-300"
            style={{ letterSpacing: "-2%" }}
          >
            Figma
          </p>
        </div>

        <div className="group w-full h-[150px] sm:h-[186px] rounded border-2 border-black flex flex-col items-center justify-center gap-[16px] sm:gap-[24px] md:gap-[32px] transition-all duration-300 hover:bg-black">
          <VSCodeIcon className="w-11 h-11 text-black group-hover:text-white transition-all duration-300" />
          <p className="text-black font-poppins font-bold text-[16px] sm:text-[18px] md:text-[20px] leading-[20px] sm:leading-[22px] md:leading-[24%] group-hover:text-white transition-all duration-300"
            style={{ letterSpacing: "-2%" }}
          >
            VSCode
          </p>
        </div>
      </div>
    </div>
  );
}
