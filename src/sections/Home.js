import { useState, useEffect } from 'react';
import Typewriter from '../sections/Typewriter';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col md:flex-row px-4 md:px-[120px] justify-center items-center transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end w-full">
        <h1
      className="font-sans font-medium text-black text-[40px] md:text-[80px] leading-[110%] md:leading-[97.2%] mb-4 text-center md:text-left"
      style={{ letterSpacing: '-3%' }}
        >
          <span className="inline-block mr-2">
            <Typewriter
              text={[
                "Hello",         // English
                "Bonjour",       // French
                "Hola",          // Spanish
                "Ciao",          // Italian
                "Olá",           // Portuguese
                "Hallo",         // German
                "こんにちは",    // Japanese (Konnichiwa)
                "안녕하세요",     // Korean (Annyeonghaseyo)
                "مرحبا",         // Arabic (Marhaban)
                "नमस्ते",         // Hindi (Namaste)
                "你好",           // Chinese (Nǐ hǎo)
              ]}
              speed={100}
              waitTime={1500}
              deleteSpeed={40}
              cursorChar={"_"}
              className="text-yellow-600"
            />
          </span>
          I'm <br />
          Inumoh Temiloluwa
        </h1>
        <p
          className="font-sans font-normal text-[18px] md:text-[25px] text-gray-700 leading-[140%] md:leading-[117%] mb-4 text-center md:text-left"
          style={{ letterSpacing: '-3%' }}
        >
          A Web developer with a deep love <br /> for combining aesthetics into technology.
        </p>
      </div>
    </div>
  );
}
