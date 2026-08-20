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
      className={`w-full px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[200px] 2xl:px-[250px] transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <h1 className="sr-only">
        Hello, I&apos;m Temi Inumoh — based in Winnipeg. I build and ship full-stack products, end to end.
      </h1>
      <div
        aria-hidden="true"
        className="font-sans font-semibold text-black text-[26px] sm:text-[32px] md:text-[38px] lg:text-[44px] leading-[1.25] w-full text-center sm:text-left"
        style={{ letterSpacing: '-3%' }}
      >
        <span className="block">
          <Typewriter
            text={[
              "Hello",
              "Bonjour",
              "Hola",
              "Ciao",
              "Olá",
              "Hallo",
              "こんにちは",
              "안녕하세요",
              "مرحبا",
              "नमस्ते",
              "你好",
            ]}
            speed={100}
            waitTime={1500}
            deleteSpeed={40}
            cursorChar={"_"}
            className="text-yellow-600"
          />
          , I&apos;m Temi Inumoh — based in Winnipeg.
        </span>
        <span className="block">
          I build and ship full-stack products,{' '}
          <span className="font-serif font-normal italic">end to end.</span>
        </span>
      </div>
    </div>
  );
}
