const links = [
  { label: 'LinkedIn', value: '/in/temiloluwa-inumoh', href: 'https://www.linkedin.com/in/temiloluwa-inumoh/' },
  { label: 'X',        value: '@TInumoh',               href: 'https://x.com/TInumoh' },
  { label: 'Github',   value: 'github.com/Babatems',    href: 'https://github.com/Babatems' },
  { label: 'Email',    value: 'temiloluwainumoh@gmail.com', href: 'mailto:temiloluwainumoh@gmail.com' },
  { label: 'Resume',   value: 'download here',          href: '/Resume.pdf' },
];

export default function Connect() {
  return (
    <div className="flex flex-col px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[200px] 2xl:px-[250px] py-[9vh] md:py-[12vh]">
      <div className="flex items-center gap-4 mb-16 md:mb-24">
        <span className="font-poppins text-[14px] text-gray-500">Connect</span>
        <div className="flex-1 h-[1px] bg-gray-300" />
      </div>

      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 md:gap-8">
        <h1
          className="text-black font-poppins font-bold text-[36px] sm:text-[44px] md:text-[52px] leading-[1.1]"
          style={{ letterSpacing: '-0.4px' }}
        >
          Let&apos;s get in touch!
        </h1>

        <div className="grid grid-cols-2 gap-x-12 sm:gap-x-20 gap-y-10 md:gap-y-14">
          {links.map(({ label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className="group block"
            >
              <p className="font-poppins font-semibold text-black text-[16px] md:text-[18px] group-hover:opacity-70 transition-opacity duration-200">
                {label}
              </p>
              <p className="font-poppins text-gray-400 text-[14px] md:text-[15px] mt-1 group-hover:opacity-70 transition-opacity duration-200">
                {value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
