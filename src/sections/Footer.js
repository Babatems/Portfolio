export default function Footer() {
    return (
        <div className="flex flex-row px-4 md:px-[120px] justify-between">
            <a href="/">
                <p className="font-poppins font-medium text-[21px] leading-[120%] text-black"
                    style={{ letterSpacing: '-3%' }}
                >
                    Babatems - 2025
                </p>
            </a>
            <div className="flex flex-row gap-7">
                <a href="https://www.linkedin.com/in/temiloluwa-inumoh-60b350250/" className="font-poppins font-medium text-[21px] leading-[120%] text-black"
                    style={{ letterSpacing: '-3%' }}
                >Linkedin</a>
                <a href="https://x.com/TInumoh" className="font-poppins font-medium text-[21px] leading-[120%] text-black"
                    style={{ letterSpacing: '-3%' }}
                >X</a>
                <a href="https://github.com/Babatems" className="font-poppins font-medium text-[21px] leading-[120%] text-black"
                    style={{ letterSpacing: '-3%' }}
                >Github</a>
            </div>
        </div>
    )
}