import Image from "next/image"

const Footer = () => {
    return (
        <footer className="css-1u29u8l">
            <div className="css-rhbbv3" />
            <div className="chakra-container css-7mriav">
                <div className="chakra-stack css-50k6ox">
                    <div className="css-0">
                        <Image alt="PyDaba logo" href="/" src="/PyDaba.png" height={80} width={80} /><Image alt="PyDaba domain" href="/" src="/dom.png" height={80} width={200} />
                    </div>
                    <div className="chakra-stack css-daiyx8">
                        <a target="_blank" rel="noreferrer" className="chakra-link chakra-button css-1a8se9s" aria-label="Facebook" href="https://m.me/pydabaPro">
                            <Image alt="facebook logo" src="/facebook.png" height={32} width={32} />
                        </a>
                        <a target="_blank" rel="noreferrer" className="chakra-link chakra-button css-1a8se9s" aria-label="Telegram" href="https://t.me/RustaceanSupport">
                            <Image alt="telegram logo" src="/telegram.png" height={32} width={32} />
                        </a>
                        <a target="_blank" rel="noreferrer" className="chakra-link chakra-button css-1a8se9s" aria-label="Whatsup" href="https://wa.me/212769090247">
                            <Image alt="whatsup logo" src="/whatsapp.png" height={32} width={32} />
                        </a>
                    </div>
                    {0 == 1 &&
                        <div className="chakra-stack css-uu6y5z">
                            <a target="_blank" rel="noreferrer" className="chakra-link css-tm6kn4" href="https://docs.upstash.com/docs/help/support">Contact Us<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="css-1dh6g8h">
                                <path d="M7 17L17 7M7 7h10v10" /></svg></a><a target="_blank" rel="noreferrer" className="chakra-link css-tm6kn4" href="https://upstash.com/static/trust/privacy.pdf">Privacy Policy<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="css-1dh6g8h">
                                    <path d="M7 17L17 7M7 7h10v10" /></svg></a><a target="_blank" rel="noreferrer" className="chakra-link css-tm6kn4" href="https://upstash.com/static/trust/terms.pdf">Terms of Service<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="css-1dh6g8h">
                                        <path d="M7 17L17 7M7 7h10v10" /></svg></a>
                        </div>
                    }

                    <div className="css-0">
                        <p className="chakra-text css-0">© 2022 PyDaba Agency, All rights reserved. <a href="/privacy-policy" target="_blank">Visit our Privacy Policy</a></p>
                    </div>

                </div>
            </div>
        </footer>

    )
}

export default Footer
