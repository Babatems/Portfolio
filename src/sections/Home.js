export default function Home() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row px-4 md:px-[120px] py-[10vh] md:py-[15vh] items-center">
      <div className="flex flex-row md:justify-between md:items-end lg:gap-[50px]">
        <h1
          className="font-sans font-medium text-black md:text-[80px] leading-[97.2%] mb-4"
          style={{ letterSpacing: '-3%' }}
        >
          Hello, I'm <br /> Inumoh Temiloluwa
        </h1>
        <p
          className="font-sans font-normal md:text-[25px] text-gray-700 leading-[117%] mb-4"
          style={{ letterSpacing: '-3%' }}
        >
          A Web developer with a deep love <br /> for combining aesthetics into technology.
        </p>
      </div>
    </div>
  );
}
