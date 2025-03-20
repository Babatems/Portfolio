import GitHubIcon from '@mui/icons-material/GitHub';
import JavascriptIcon from '@mui/icons-material/Javascript';
import CssIcon from '@mui/icons-material/Css';
import HtmlIcon from '@mui/icons-material/Html';

export default function TechStack() {
  return (
    <div className="min-h-screen flex flex-col px-4 md:px-[120px] py-[9vh] md:py-[14vh]">
      <h1 className="text-black font-poppins font-bold md:text-[36px] leading-[52px] mb-5"
        style={{letterSpacing: '-0.4px'}}
      >
        Tech Stack
      </h1>
      <p className="text-gray-700 font-normal font-poppins text-[18px] leading-[26px] mb-[60px]">Technologies I've been working with</p>

      <div className="grid grid-cols-5 gap-[40px] justify-center items-center">
        <div className="group w-full h-[186px] rounded border-2 border-black flex flex-col items-center justify-center gap-[32px] transition-all duration-300 hover:bg-black">
          <GitHubIcon className="size-11 text-black group-hover:text-white transition-all duration-300" />
          <p className="text-black font-poppins font-bold text-[20px] leading-[24%] group-hover:text-white transition-all duration-300"
            style={{ letterSpacing: "-2%" }}
          >
            Github
          </p>
        </div>

        <div className="group w-full h-[186px] rounded border-2 border-black flex flex-col items-center justify-center gap-[32px] transition-all duration-300 hover:bg-black">
          <GitHubIcon className="w-11 h-11 text-black group-hover:text-white transition-all duration-300" />
          <p className="text-black font-poppins font-bold text-[20px] leading-[24%] group-hover:text-white transition-all duration-300"
            style={{ letterSpacing: "-2%" }}
          >
            Git
          </p>
        </div>

        <div className="group w-full h-[186px] rounded border-2 border-black flex flex-col items-center justify-center gap-[32px] transition-all duration-300 hover:bg-black">
          <JavascriptIcon className="w-11 h-11 text-black group-hover:text-white transition-all duration-300" />
          <p className="text-black font-poppins font-bold text-[20px] leading-[24%] group-hover:text-white transition-all duration-300"
            style={{ letterSpacing: "-2%" }}
          >
            Javascript
          </p>
        </div>
        
        <div className="group w-full h-[186px] rounded border-2 border-black flex flex-col items-center justify-center gap-[32px] transition-all duration-300 hover:bg-black">
          <GitHubIcon className="w-11 h-11 text-black group-hover:text-white transition-all duration-300" />
          <p className="text-black font-poppins font-bold text-[20px] leading-[24%] group-hover:text-white transition-all duration-300"
            style={{ letterSpacing: "-2%" }}
          >
            React
          </p>
        </div>

        <div className="group w-full h-[186px] rounded border-2 border-black flex flex-col items-center justify-center gap-[32px] transition-all duration-300 hover:bg-black">
          <CssIcon className="w-11 h-11 text-black group-hover:text-white transition-all duration-300" />
          <p className="text-black font-poppins font-bold text-[20px] leading-[24%] group-hover:text-white transition-all duration-300"
            style={{ letterSpacing: "-2%" }}
          >
            CSS
          </p>
        </div>

        <div className="group w-full h-[186px] rounded border-2 border-black flex flex-col items-center justify-center gap-[32px] transition-all duration-300 hover:bg-black">
          <HtmlIcon className="w-11 h-11 text-black group-hover:text-white transition-all duration-300" />
          <p className="text-black font-poppins font-bold text-[20px] leading-[24%] group-hover:text-white transition-all duration-300"
            style={{ letterSpacing: "-2%" }}
          >
            HTML
          </p>
        </div>

        <div className="group w-full h-[186px] rounded border-2 border-black flex flex-col items-center justify-center gap-[32px] transition-all duration-300 hover:bg-black">
          <GitHubIcon className="w-11 h-11 text-black group-hover:text-white transition-all duration-300" />
          <p className="text-black font-poppins font-bold text-[20px] leading-[24%] group-hover:text-white transition-all duration-300"
            style={{ letterSpacing: "-2%" }}
          >
            Tailwind
          </p>
        </div>

        <div className="group w-full h-[186px] rounded border-2 border-black flex flex-col items-center justify-center gap-[32px] transition-all duration-300 hover:bg-black">
          <GitHubIcon className="w-11 h-11 text-black group-hover:text-white transition-all duration-300" />
          <p className="text-black font-poppins font-bold text-[20px] leading-[24%] group-hover:text-white transition-all duration-300"
            style={{ letterSpacing: "-2%" }}
          >
            Firebase
          </p>
        </div>

        <div className="group w-full h-[186px] rounded border-2 border-black flex flex-col items-center justify-center gap-[32px] transition-all duration-300 hover:bg-black">
          <GitHubIcon className="w-11 h-11 text-black group-hover:text-white transition-all duration-300" />
          <p className="text-black font-poppins font-bold text-[20px] leading-[24%] group-hover:text-white transition-all duration-300"
            style={{ letterSpacing: "-2%" }}
          >
            Figma
          </p>
        </div>

        <div className="group w-full h-[186px] rounded border-2 border-black flex flex-col items-center justify-center gap-[32px] transition-all duration-300 hover:bg-black">
          <GitHubIcon className="w-11 h-11 text-black group-hover:text-white transition-all duration-300" />
          <p className="text-black font-poppins font-bold text-[20px] leading-[24%] group-hover:text-white transition-all duration-300"
            style={{ letterSpacing: "-2%" }}
          >
            VSCode
          </p>
        </div>
      </div>
    </div>
  );
}
