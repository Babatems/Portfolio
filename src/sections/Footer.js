import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import HalftoneName from '../ui/halftone-name';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="flex flex-col gap-6 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[200px] 2xl:px-[250px] pt-10 md:pt-14">
            <div className="flex flex-col items-center sm:flex-row sm:justify-between gap-4">
                <p className="font-poppins font-medium text-[18px] leading-[120%] text-black"
                    style={{ letterSpacing: '-3%' }}
                >
                    © {year} Temi Inumoh &amp; LLMs
                </p>
                <div className="flex flex-row gap-7">
                    <a
                        href="https://www.linkedin.com/in/temiloluwa-inumoh/"
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

            <HalftoneName text="Temi Inumoh" playIntro={false} className="block w-full" />
        </footer>
    )
}
