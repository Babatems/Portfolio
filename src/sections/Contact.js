import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Contact() {
    return (
      <>
        <div className="flex flex-col px-4 md:px-[120px] py-[9vh] md:py-[10vh]">
          <hr className='w-full h-[5px] border-[#181717] font-bold'/>
          <div className='flex flex-col md:flex-row justify-between mt-[70px]'>
            <div className='mb-8 md:mb-0'>
              <p className='font-poppins font-normal text-[24px] md:text-[32px] leading-[115%]'
                style={{letterSpacing: '-3%'}}
              >
                I would love to work with <br /> you on your next project 
                <ArrowForwardIcon sx={{ width: '40px', height: '20px', md: { width: '51px', height: '27px' } }} />
              </p>
            </div>
            <div className='flex flex-col gap-[20px] md:gap-[27px]'>
              <a 
                href="mailto:temiloluwainumoh@gmail.com" 
                className='font-poppins font-normal text-[20px] md:text-[32px] leading-[115%]'
                style={{letterSpacing: '-3%'}}
              >
                temiloluwainumoh@gmail.com
              </a>
              <a 
                href="path/to/your/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className='font-poppins font-normal text-[16px] md:text-[18px] leading-[121.5%]'
                style={{letterSpacing: '-3%'}}
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
