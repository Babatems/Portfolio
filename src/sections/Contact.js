import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Contact() {
  return (
    <>
      <div className="flex flex-col px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[200px] 2xl:px-[250px] py-[9vh] md:py-[10vh]">
        <hr className='w-full h-[5px] border-[#181717] font-bold' />
        <div className='flex flex-col md:flex-row justify-between mt-[70px]'>
          <div className='mb-8 md:mb-0'>
            <p
              className='font-poppins font-normal text-[22px] md:text-[28px] lg:text-[32px] leading-[130%] md:leading-[115%]'
              style={{ letterSpacing: '-3%' }}
            >
              I would love to work with <span className="hidden sm:inline"><br /></span>you on your next project
              <ArrowForwardIcon sx={{ width: { xs: '36px', md: '44px', lg: '51px' }, height: { xs: '18px', md: '24px', lg: '27px' } }} />
            </p>
          </div>
          <div className='flex flex-col gap-[16px] md:gap-[27px]'>
            <a
              href="mailto:temiloluwainumoh@gmail.com"
              className='font-poppins font-normal text-[16px] sm:text-[18px] md:text-[24px] lg:text-[32px] leading-[115%] hover:underline'
              style={{ letterSpacing: '-3%' }}
            >
              temiloluwainumoh@gmail.com
            </a>
            <a
              href="/Resume.docx"
              target="_blank"
              rel="noopener noreferrer"
              className='font-poppins font-normal text-[15px] md:text-[18px] leading-[121.5%] hover:underline'
              style={{ letterSpacing: '-3%' }}
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
