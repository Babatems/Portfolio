import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Contact() {
    return (
      <>
        <div className="min-h-screen flex flex-col px-4 md:px-[120px] py-[9vh] md:py-[14vh]">
          <hr className='w-full h-[5px] border-[#181717] font-bold'/>
          <div className='flex flex-row justify-between mt-[70px]'>
            <div>
              <p className='font-poppins font-normal text-[32px] leading-[115%]'
                style={{letterSpacing: '-3%'}}
              >I would love to work with <br /> you on your next project <ArrowForwardIcon /></p>
              
            </div>
            <div>
              <a href="mailto:temiloluwainumoh@gmail.com">Email Me</a>
              <a href="path/to/your/resume.pdf" target="_blank" rel="noopener noreferrer">View My Resume</a>
            </div>
          </div>
        </div>
      </>
    );
  }
