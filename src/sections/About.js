import ApartmentIcon from '@mui/icons-material/Apartment';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col gap-9 px-4 md:px-[120px] py-[9vh] md:py-[14vh]">
      <h1 className="text-black font-poppins font-bold md:text-[36px] leading-[52px]"
        style={{letterSpacing: '-0.4px'}}
      >About Me
      </h1>
      <p className="text-gray-700 font-normal font-poppins text-[18px] leading-[26px]">
        Hi, I'm Inumoh Temiloluwa Donald, a passionate web developer with five years of experience in crafting digital experiences. My journey into web development began in Grade 12, when a friend from church introduced me to the world of building websites. Fascinated by the endless possibilities, I started learning HTML and CSS, practicing relentlessly and creating my own projects. <br />
        By my second year in university, I had already mastered responsive design and was diving deep into React to build dynamic, user-friendly applications. To refine my skills, I invested in a Udemy course, expanding my knowledge and working on even more projects.<br/>
        Today, I specialize in creating seamless, modern web applications that blend aesthetics with functionality.
      </p>

      <h1 className="text-black font-poppins font-bold md:text-[36px] leading-[52px]"
      style={{letterSpacing: '-0.4px'}}>
        Work Experience
      </h1>
      
      <div className='flex'>
        <div>
          <h1>Donor Care Representative</h1>
          <div>
            <div>
              <ApartmentIcon />
              <p>Siloam Mission</p>
            </div>

            <div>
              <LocationOnIcon />
              <p>Canada</p>
            </div>
          </div>
        </div>

        <div>
          <div>Seasonal</div>
          <div>
            <CalendarMonthIcon />
            <p>Oct 2024 - Feb 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}
