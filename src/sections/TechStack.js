import GitHubIcon from '@mui/icons-material/GitHub';

export default function TechStack() {
  return (
    <div className="min-h-screen flex flex-col px-4 md:px-[120px] py-[9vh] md:py-[14vh]">
      <h1 className="text-black font-poppins font-bold md:text-[36px] leading-[52px] mb-5"
        style={{letterSpacing: '-0.4px'}}
      >
        Tech Stack
      </h1>
      <p className="text-gray-700 font-normal font-poppins text-[18px] leading-[26px] mb-[60px]">Technologies I've been working with recently</p>

      <div className="grid grid-cols-5 gap-[40px] justify-center items-center">
        <div className="group w-full h-[186px] rounded border-2 border-black flex flex-col items-center justify-center gap-[32px] transition-all duration-300 hover:bg-black">
          <GitHubIcon className="w-11 h-11 text-black group-hover:text-white transition-all duration-300" />
          <p className="text-black font-poppins font-bold text-[20px] leading-[24%] group-hover:text-white transition-all duration-300"
            style={{ letterSpacing: "-2%" }}
          >
            Git
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
          <GitHubIcon className="w-11 h-11 text-black group-hover:text-white transition-all duration-300" />
          <p className="text-black font-poppins font-bold text-[20px] leading-[24%] group-hover:text-white transition-all duration-300"
            style={{ letterSpacing: "-2%" }}
          >
            Git
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
          <GitHubIcon className="w-11 h-11 text-black group-hover:text-white transition-all duration-300" />
          <p className="text-black font-poppins font-bold text-[20px] leading-[24%] group-hover:text-white transition-all duration-300"
            style={{ letterSpacing: "-2%" }}
          >
            Git
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
      </div>
    </div>
  );
}
