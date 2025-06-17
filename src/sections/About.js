import ApartmentIcon from '@mui/icons-material/Apartment';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SchoolIcon from '@mui/icons-material/School';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`min-h-screen flex flex-col gap-7 px-4 md:px-[250px] py-[5vh] transition-opacity duration-1000 ${
        inView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <h1 className="text-black font-poppins font-bold text-[28px] md:text-[36px] leading-[40px] md:leading-[52px]"
        style={{letterSpacing: '-0.4px'}}
      >About Me
      </h1>
      <p className="text-gray-700 font-normal font-poppins text-[16px] md:text-[18px] leading-[24px] md:leading-[26px]">
        Hi, I’m Inumoh Temiloluwa — a web developer with 5 years of experience turning ideas into sleek, responsive web apps.
        <br />
        My journey started back in high school when a friend introduced me to HTML and CSS. Since then, I’ve mastered responsive design, specialized in React, and continued sharpening my skills through hands-on projects and courses.
        Outside of coding, I’m either trading memecoins or gaming.
      </p>

      <h1 className="text-black font-poppins font-bold text-[28px] md:text-[36px] leading-[40px] md:leading-[52px]"
        style={{letterSpacing: '-0.4px'}}>
        Work Experience
      </h1>

      <div className='flex flex-col w-full gap-4'>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <h1 className="font-poppins font-normal text-[#666666] text-[18px] md:text-[20px] leading-[26px] md:leading-[28px]"
            style={{letterSpacing: "1px"}}
          >
            Freelance Web Developer
          </h1>
          <p className="flex justify-center items-center px-[15px] md:px-[20px] py-[5px] bg-[#D7FFE0] text-[#018C0F] text-[8px] md:text-[9px] font-poppins font-semibold leading-[20px] md:leading-[26px] tracking-wide rounded-full"
            style={{letterSpacing: "1px"}}
          >
            Freelance
          </p> 
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-0">
          <div className="flex flex-col md:flex-row gap-[10px] md:gap-[20px]">
            <div className="flex flex-row gap-1 items-center">
              <ApartmentIcon className="text-[#A7A7A7] w-[12px] md:w-[9px] h-[12px] md:h-[9px]"/>
              <p className='font-poppins font-medium text-[10px] md:text-[12px] leading-[20px] md:leading-[28px] text-[#A7A7A7]' 
                style={{letterSpacing: "1px"}}
              >
                Self Employed
              </p>
            </div>

            <div className="flex flex-row gap-1 items-center">
              <LocationOnIcon className="text-[#A7A7A7] w-[12px] md:w-[9px] h-[12px] md:h-[9px]"/>
              <p className='font-poppins font-medium text-[10px] md:text-[12px] leading-[20px] md:leading-[28px] text-[#A7A7A7]'
                style={{letterSpacing: "0.5px"}}
              >
                Remote
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <CalendarMonthIcon className="text-[#A7A7A7] w-[12px] md:w-[9px] h-[12px] md:h-[9px]"/>
            <p className='font-poppins font-medium text-[10px] md:text-[12px] leading-[20px] md:leading-[28px] text-[#A7A7A7]'
              style={{letterSpacing: "1px"}}
            >
              Sept 2022 - Present
            </p>
          </div>
        </div>
      </div>
      <hr className='w-full h-[2px] md:h-[3px] border-gray-400'/>

      <div className='flex flex-col w-full gap-4'>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <h1 className="font-poppins font-normal text-[#666666] text-[18px] md:text-[20px] leading-[26px] md:leading-[28px]"
            style={{letterSpacing: "1px"}}
          >
            Web Developer
          </h1>
          <p className="flex justify-center items-center px-[15px] md:px-[20px] py-[5px] bg-[#D7FFE0] text-[#018C0F] text-[8px] md:text-[9px] font-poppins font-semibold leading-[20px] md:leading-[26px] tracking-wide rounded-full"
            style={{letterSpacing: "1px"}}
          >
            Internship
          </p> 
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-0">
          <div className="flex flex-col md:flex-row gap-[10px] md:gap-[20px]">
            <div className="flex flex-row gap-1 items-center">
              <ApartmentIcon className="text-[#A7A7A7] w-[12px] md:w-[9px] h-[12px] md:h-[9px]"/>
              <p className='font-poppins font-medium text-[10px] md:text-[12px] leading-[20px] md:leading-[28px] text-[#A7A7A7]' 
                style={{letterSpacing: "1px"}}
              >
                The Breej Global Ltd.
              </p>
            </div>

            <div className="flex flex-row gap-1 items-center">
              <LocationOnIcon className="text-[#A7A7A7] w-[12px] md:w-[9px] h-[12px] md:h-[9px]"/>
              <p className='font-poppins font-medium text-[10px] md:text-[12px] leading-[20px] md:leading-[28px] text-[#A7A7A7]'
                style={{letterSpacing: "0.5px"}}
              >
                Nigeria
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <CalendarMonthIcon className="text-[#A7A7A7] w-[12px] md:w-[9px] h-[12px] md:h-[9px]"/>
            <p className='font-poppins font-medium text-[10px] md:text-[12px] leading-[20px] md:leading-[28px] text-[#A7A7A7]'
              style={{letterSpacing: "1px"}}
            >
              June 2023 - Sept 2023
            </p>
          </div>
        </div>
      </div>
      <hr className='w-full h-[2px] md:h-[3px] border-gray-400'/>

      <div className='flex flex-col w-full gap-4'>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <h1 className="font-poppins font-normal text-[#666666] text-[18px] md:text-[20px] leading-[26px] md:leading-[28px]"
            style={{letterSpacing: "1px"}}
          >
            Junior Web Developer
          </h1>
          <p className="flex justify-center items-center px-[15px] md:px-[20px] py-[5px] bg-[#D7FFE0] text-[#018C0F] text-[8px] md:text-[9px] font-poppins font-semibold leading-[20px] md:leading-[26px] tracking-wide rounded-full"
            style={{letterSpacing: "1px"}}
          >
            Full Time
          </p> 
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-0 ">
          <div className="flex flex-col md:flex-row gap-[10px] md:gap-[20px]">
            <div className="flex flex-row gap-1 items-center">
              <ApartmentIcon className="text-[#A7A7A7] w-[12px] md:w-[9px] h-[12px] md:h-[9px]"/>
              <p className='font-poppins font-medium text-[10px] md:text-[12px] leading-[20px] md:leading-[28px] text-[#A7A7A7]' 
                style={{letterSpacing: "1px"}}
              >
                Buuka Technologies
              </p>
            </div>

            <div className="flex flex-row gap-1 items-center">
              <LocationOnIcon className="text-[#A7A7A7] w-[12px] md:w-[9px] h-[12px] md:h-[9px]"/>
              <p className='font-poppins font-medium text-[10px] md:text-[12px] leading-[20px] md:leading-[28px] text-[#A7A7A7]'
                style={{letterSpacing: "0.5px"}}
              >
                Nigeria
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <CalendarMonthIcon className="text-[#A7A7A7] w-[12px] md:w-[9px] h-[12px] md:h-[9px]"/>
            <p className='font-poppins font-medium text-[10px] md:text-[12px] leading-[20px] md:leading-[28px] text-[#A7A7A7]'
              style={{letterSpacing: "1px"}}
            >
              Aug 2022 - Nov 2022
            </p>
          </div>
        </div>
      </div>
      <hr className='w-full h-[2px] md:h-[3px] border-gray-400'/>

      <h1 className="text-black font-poppins font-bold text-[28px] md:text-[36px] leading-[40px] md:leading-[52px]"
        style={{letterSpacing: '-0.4px'}}>
        Education
      </h1>
      
      <div className='flex flex-col w-full gap-4'>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <h1 className="font-poppins font-normal text-[#666666] text-[18px] md:text-[20px] leading-[26px] md:leading-[28px]"
            style={{letterSpacing: "1px"}}
          >
            BSc. in Computer Science
          </h1>
          <p className="flex justify-center items-center px-[15px] md:px-[20px] py-[5px] bg-[#D7FFE0] text-[#018C0F] text-[8px] md:text-[9px] font-poppins font-semibold leading-[20px] md:leading-[26px] tracking-wide rounded-full"
            style={{letterSpacing: "1px"}}
          >
            Full Time
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-0">
          <div className="flex flex-col md:flex-row gap-[10px] md:gap-[20px]">
            <div className="flex flex-row gap-1 items-center">
              <SchoolIcon className="text-[#A7A7A7] w-[12px] md:w-[9px] h-[12px] md:h-[9px]"/>
              <p className='font-poppins font-medium text-[10px] md:text-[12px] leading-[20px] md:leading-[28px] text-[#A7A7A7]' 
                style={{letterSpacing: "1px"}}
              >
                Redeemer's University
              </p>
            </div>

            <div className="flex flex-row gap-1 items-center">
              <LocationOnIcon className="text-[#A7A7A7] w-[12px] md:w-[9px] h-[12px] md:h-[9px]"/>
              <p className='font-poppins font-medium text-[10px] md:text-[12px] leading-[20px] md:leading-[28px] text-[#A7A7A7]'
                style={{letterSpacing: "0.5px"}}
              >
                Nigeria
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <CalendarMonthIcon className="text-[#A7A7A7] w-[12px] md:w-[9px] h-[12px] md:h-[9px]"/>
            <p className='font-poppins font-medium text-[10px] md:text-[12px] leading-[20px] md:leading-[28px] text-[#A7A7A7]'
              style={{letterSpacing: "1px"}}
            >
              Nov 2020 - Oct 2024
            </p>
          </div>
        </div>
      </div>
      <hr className='w-full h-[2px] md:h-[3px] border-gray-400'/>
    </div>
  );
}
