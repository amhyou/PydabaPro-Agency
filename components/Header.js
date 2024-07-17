import Image from "next/image"
import Link from "next/link"
const Header = ({ chatNow }) => {

    return (
        <header className="css-v7z34l">
            <div className="chakra-container css-7mriav">
                <div className="css-svv11a">
                    <div className="css-k008qs">
                        <Image alt="pydaba logo" src="/PyDaba.png" height={80} width={80} /><Image alt="PyDaba domain" src="/dom.png" height={80} width={200} />
                    </div>
                    <div className="css-pg4o7v">
                        <nav className="chakra-stack css-l8e9nh">
                            <a className="chakra-link css-iofb2g" href="#section-services">Services</a><a className="chakra-link css-tm6kn4" href="#section-pricing">Pricing</a><a className="chakra-link css-tm6kn4" href="#section-testimonials">Testimonials</a><a className="chakra-link css-iofb2g" href="#section-faqs">Faqs</a>

                            {1 == 2 && <> <a className="chakra-link css-sdu5e4" href="https://upstash.com/blog"><span className="chakra-text css-0">Blog</span> <span className="chakra-badge css-7y1hy4">New</span></a><a target="_blank" rel="noreferrer" className="chakra-link css-tm6kn4" href="https://docs.upstash.com/">Docs<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="css-1dh6g8h">
                                <path d="M7 17L17 7M7 7h10v10" /></svg></a><a target="_blank" rel="noreferrer" className="chakra-link css-tm6kn4" href="https://discord.gg/w9SenAtbme">Discord<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="css-1dh6g8h">
                                    <path d="M7 17L17 7M7 7h10v10" /></svg></a> </>}
                        </nav>
                    </div>
                    <div className="css-e6dmzb">
                        <button onClick={chatNow} className="chakra-link chakra-button css-6e83i3">Chat with us</button>
                    </div>
                    <div className="css-14ccebu">
                        <button onClick={chatNow} type="button" className="chakra-button css-fwx8cz" aria-label="Open menu">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="css-16iqw5x" aria-hidden="true" focusable="false">
                                <path d="M3 12h18M3 6h18M3 18h18" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header >

    )
}

export default Header
