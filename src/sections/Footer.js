import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className="flex flex-row px-4 md:px-[120px] justify-between">
            <a href="/">
                <p className="font-poppins font-medium text-[18px] leading-[120%] text-black"
                    style={{ letterSpacing: '-3%' }}
                >
                    Babatems
                </p>
            </a>
            <div className="flex flex-row gap-7">
                <a 
                    href="https://www.linkedin.com/in/temiloluwa-inumoh-60b350250/"
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-poppins font-medium text-[18px] leading-[120%] text-black flex items-center"
                    style={{ letterSpacing: '-3%' }}
                >
                    <span className="block md:hidden"><FaLinkedin /></span>
                    <span className="hidden md:block">Linkedin</span>
                </a>
                <a 
                    href="https://x.com/TInumoh" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-poppins font-medium text-[18px] leading-[120%] text-black flex items-center"
                    style={{ letterSpacing: '-3%' }}
                >
                    <span className="block md:hidden"><FaTwitter /></span>
                    <span className="hidden md:block">X</span>
                </a>
                <a 
                    href="https://github.com/Babatems"
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-poppins font-medium text-[18px] leading-[120%] text-black flex items-center"
                    style={{ letterSpacing: '-3%' }}
                >
                    <span className="block md:hidden"><FaGithub /></span>
                    <span className="hidden md:block">Github</span>
                </a>
            </div>
        </div>
    )
}