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
      className={`min-h-screen flex flex-col gap-7 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[200px] 2xl:px-[250px] py-[4vh] transition-opacity duration-1000 ${
        inView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <h1 className="text-black font-poppins font-bold text-[28px] md:text-[36px] leading-[40px] md:leading-[52px]"
        style={{letterSpacing: '-0.4px'}}
      >About
      </h1>
      <p className="font-poppins text-[18px] md:text-[24px] leading-[28px] md:leading-[36px]">
        <span className="text-black font-semibold">
          I’m Inumoh Temiloluwa, a full-stack software engineer at BlockTrace, where I build blockchain analytics tools used across
          multiple chains. I enjoy turning complex products into fast, reliable experiences.
        </span>
        <span className="text-gray-400 font-normal">
          {' '}Outside of work, I love gaming, playing football, and creating content online.
        </span>
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
            Lead Software Engineer
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
              <ApartmentIcon className="text-[#A7A7A7] w-[12px] md:w-[9px] h-[12px] md:h-[9px]"/>
              <p className='font-poppins font-medium text-[10px] md:text-[12px] leading-[20px] md:leading-[28px] text-[#A7A7A7]'
                style={{letterSpacing: "1px"}}
              >
                BlockTrace
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
              Nov 2025 - Present
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
      <div className='flex flex-col w-full gap-4'>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <h1 className="font-poppins font-normal text-[#666666] text-[18px] md:text-[20px] leading-[26px] md:leading-[28px]"
            style={{letterSpacing: "1px"}}
          >
            MSc. in Applied Computer Science & Society
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
                University of Winnipeg
              </p>
            </div>

            <div className="flex flex-row gap-1 items-center">
              <LocationOnIcon className="text-[#A7A7A7] w-[12px] md:w-[9px] h-[12px] md:h-[9px]"/>
              <p className='font-poppins font-medium text-[10px] md:text-[12px] leading-[20px] md:leading-[28px] text-[#A7A7A7]'
                style={{letterSpacing: "0.5px"}}
              >
                Canada
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <CalendarMonthIcon className="text-[#A7A7A7] w-[12px] md:w-[9px] h-[12px] md:h-[9px]"/>
            <p className='font-poppins font-medium text-[10px] md:text-[12px] leading-[20px] md:leading-[28px] text-[#A7A7A7]'
              style={{letterSpacing: "1px"}}
            >
              Jan 2026 - Present
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
