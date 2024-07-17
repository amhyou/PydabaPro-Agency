import Image from 'next/image'

const Testimonials = () => {
    return (
        <section id="section-testimonials" className="css-1ptmrwr">
            <div className="chakra-container css-7mriav">
                <header className="css-0">
                    <h2 className="chakra-heading css-1jkx6l7">Loved by people like you</h2>
                </header>
                <div className="css-a8rqzt">
                    <div className="css-1m7aql5">
                        <span className="chakra-avatar css-1yekhua"><Image src="/donny.jpg" layout='fill' alt="Donny West" className="chakra-avatar__img css-3a5bz2" /></span>
                        <div className="css-1q8b5yy">
                            <header className="css-0">
                                <h5 className="chakra-heading css-9f6g39">lelisahomlanto</h5>
                                <p className="chakra-text css-1n3gi98">United States</p>
                            </header>
                            <p className="chakra-text css-1ks5y4g">Very professional, always on time and understanding. I definitely recommend working with him because he is really experienced at what he does and the job quality is high.</p>
                        </div>
                    </div>
                    <div className="css-1m7aql5">
                        <span className="chakra-avatar css-ath0s9"><Image src="/joe.jpg" layout='fill' alt="Joe Emison" className="chakra-avatar__img css-3a5bz2" /></span>
                        <div className="css-1q8b5yy">
                            <header className="css-0">
                                <h5 className="chakra-heading css-9f6g39">andersonpamela</h5>
                                <p className="chakra-text css-1n3gi98">Canada</p>
                            </header>
                            <p className="chakra-text css-1ks5y4g">Quick service, excellent results. Looking forward to use your services again and going to recommend everyone. Thanks buddy.</p>
                        </div>
                    </div>
                    <div className="css-1m7aql5">
                        <span className="chakra-avatar css-5yxa6y"><Image src="/rauch.jpeg" layout='fill' alt="Guillermo Rauch" className="chakra-avatar__img css-3a5bz2" /></span>
                        <div className="css-1q8b5yy">
                            <header className="css-0">
                                <h5 className="chakra-heading css-9f6g39">liamtaylor655</h5>
                                <p className="chakra-text css-1n3gi98">United Kingdom</p>
                            </header>
                            <p className="chakra-text css-1ks5y4g">High level programmer with much knowledge, he completed my task in a very fast time, Thank you so much and I&apos;m always going to work with you.</p>
                        </div>
                    </div>
                    <div className="css-1m7aql5">
                        <span className="chakra-avatar css-1t2gf90"><Image src="/nate.jpg" layout='fill' alt="Nate Weiss" className="chakra-avatar__img css-3a5bz2" /></span>
                        <div className="css-1q8b5yy">
                            <header className="css-0">
                                <h5 className="chakra-heading css-9f6g39">xd6306</h5>
                                <p className="chakra-text css-1n3gi98">Australia</p>
                            </header>
                            <p className="chakra-text css-1ks5y4g">Very easy to talk to, quick and simple and informative and willing to talk more after project was completed about any other details! Amazing!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Testimonials
