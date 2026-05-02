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
  SiVscodium,
  SiClaude,
  SiAnthropic,
} from 'react-icons/si';

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
  { label: 'VSCode',      Icon: SiVscodium },
  { label: 'Claude',      Icon: SiClaude },
  { label: 'Claude Code', Icon: SiAnthropic },
];

export default function TechStack() {
  return (
    <div className="min-h-screen flex flex-col px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[200px] 2xl:px-[250px] py-[9vh] md:py-[14vh]">
      <h1
        className="text-black font-poppins font-bold text-[28px] md:text-[36px] leading-[36px] md:leading-[52px] mb-5"
        style={{ letterSpacing: '-0.4px' }}
      >
        Tech Stack
      </h1>
      <p className="text-gray-700 font-normal font-poppins text-[16px] md:text-[18px] leading-[22px] md:leading-[26px] mb-[40px] md:mb-[60px]">
        Technologies I've been working with
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-[20px] sm:gap-[24px] md:gap-[30px]">
        {stack.map(({ label, Icon }) => (
          <div
            key={label}
            className="group w-full h-[150px] sm:h-[170px] rounded border-2 border-black flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:bg-black"
          >
            <Icon
              size={40}
              className="text-black group-hover:text-white transition-all duration-300"
            />
            <p
              className="text-black font-poppins font-bold text-[14px] sm:text-[15px] md:text-[16px] leading-[20px] group-hover:text-white transition-all duration-300 text-center px-1"
              style={{ letterSpacing: '-2%' }}
            >
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
