function isIncluded(bool, column = 0) {
    const col = column ? "css-1ih61vb" : "css-177jhv5"
    if (bool) {
        return (
            <div className={col}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="css-1qf55lx">
                    <path d="M20 6L9 17l-5-5" /></svg>
            </div>
        )
    }
    else {
        return (
            <div className={col}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="css-pv2oem">
                    <path d="M5 12h14" /></svg>
            </div>
        )
    }
}

const Pricing = ({ chatNow }) => {
    return (
        <section id="section-pricing" className="css-11713ri">
            <div className="css-rhbbv3" />
            <div className="chakra-container css-7mriav">
                <header className="css-0">
                    <h2 className="chakra-heading css-1jkx6l7">Plans &amp; Pricing</h2>
                    <div className="chakra-container css-llo4ky">
                        <p className="chakra-text css-z78z5r">Pay only for complex code.</p>
                    </div>
                    {1 == 2 && <div className="css-178yklu">
                        <button type="button" className="chakra-button css-zkfzjj">✓ Redis</button><button type="button" className="chakra-button css-1lulml">Kafka</button>
                    </div>}

                </header>
                <div className="css-1smket5">
                    <div className="css-etih0s">
                        <div className="css-12dmjen">
                            <div className="css-177jhv5" />
                            <div className="css-177jhv5">
                                <h5 className="chakra-heading css-12d46le">Simple code</h5>
                            </div>
                            <div className="css-1ih61vb" style={{ borderRadius: '16px 16px 0px 0px' }}>
                                <h5 className="chakra-heading css-12d46le">Advanced code</h5>
                            </div>
                            <div className="css-177jhv5">
                                <h5 className="chakra-heading css-12d46le">Web app</h5>
                            </div>
                            <div className="css-1pip4vl">
                                <div className="css-1iiac7s" />
                            </div>

                            <div className="css-1s812v9">
                                <span className="chakra-text css-0">Include source code<span tabIndex={0} className="css-0"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="css-19spvli">
                                    <circle cx={12} cy={12} r={10} />
                                    <path d="M12 16v-4M12 8h.01" /></svg></span></span>
                            </div>
                            {isIncluded(true)}
                            {isIncluded(true, 1)}
                            {isIncluded(true)}
                            <div className="css-1pip4vl">
                                <div className="css-1iiac7s" />
                            </div>
                            <div className="css-1s812v9">
                                <span className="chakra-text css-0">Detailed code comments<span tabIndex={0} className="css-0"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="css-19spvli">
                                    <circle cx={12} cy={12} r={10} />
                                    <path d="M12 16v-4M12 8h.01" /></svg></span></span>
                            </div>
                            {isIncluded(true)}
                            {isIncluded(true, 1)}
                            {isIncluded(true)}
                            <div className="css-1pip4vl">
                                <div className="css-1iiac7s" />
                            </div>
                            <div className="css-1s812v9">
                                <span className="chakra-text css-0">Setup file<span tabIndex={0} className="css-0"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="css-19spvli">
                                    <circle cx={12} cy={12} r={10} />
                                    <path d="M12 16v-4M12 8h.01" /></svg></span></span>
                            </div>
                            {isIncluded(true)}
                            {isIncluded(true, 1)}
                            {isIncluded(true)}
                            <div className="css-1pip4vl">
                                <div className="css-1iiac7s" />
                            </div>
                            <div className="css-1s812v9">
                                <span className="chakra-text css-0">Object Oriented Programming<span tabIndex={0} className="css-0"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="css-19spvli">
                                    <circle cx={12} cy={12} r={10} />
                                    <path d="M12 16v-4M12 8h.01" /></svg></span></span>
                            </div>
                            {isIncluded(false)}
                            {isIncluded(true, 1)}
                            {isIncluded(true)}
                            <div className="css-1pip4vl">
                                <div className="css-1iiac7s" />
                            </div>
                            <div className="css-1s812v9">
                                <span className="chakra-text css-0">Database integration<span tabIndex={0} className="css-0"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="css-19spvli">
                                    <circle cx={12} cy={12} r={10} />
                                    <path d="M12 16v-4M12 8h.01" /></svg></span></span>
                            </div>
                            {isIncluded(false)}
                            {isIncluded(false, 1)}
                            {isIncluded(true)}
                            <div className="css-1pip4vl">
                                <div className="css-1iiac7s" />
                            </div>
                            <div className="css-1s812v9">
                                <span className="chakra-text css-0">Delivery time<span tabIndex={0} className="css-0"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="css-19spvli">
                                    <circle cx={12} cy={12} r={10} />
                                    <path d="M12 16v-4M12 8h.01" /></svg></span></span>
                            </div>
                            <div className="css-177jhv5">
                                <span className="chakra-text css-0">1 day</span>
                            </div>
                            <div className="css-1ih61vb">
                                <span className="chakra-text css-0">2-3 days</span>
                            </div>
                            <div className="css-177jhv5">
                                <span className="chakra-text css-0">2-7 days</span>
                            </div>
                            <div className="css-1pip4vl">
                                <div className="css-1iiac7s" />
                            </div>
                            <div className="css-1s812v9">
                                <span className="chakra-text css-0">Revisions<span tabIndex={0} className="css-0"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="css-19spvli">
                                    <circle cx={12} cy={12} r={10} />
                                    <path d="M12 16v-4M12 8h.01" /></svg></span></span>
                            </div>
                            <div className="css-177jhv5">
                                <span className="chakra-text css-0">3 times</span>
                            </div>
                            <div className="css-1ih61vb">
                                <span className="chakra-text css-0">5 times</span>
                            </div>
                            <div className="css-177jhv5">
                                <span className="chakra-text css-0">Unlimited</span>
                            </div>
                            <div className="css-1pip4vl">
                                <div className="css-1iiac7s" />
                            </div>
                            <div className="css-1s812v9" />
                            <div className="css-177jhv5">
                                <span className="chakra-text css-0">0$ (No payment required)</span>
                            </div>
                            <div className="css-1ih61vb">
                                <span className="chakra-text css-0">Pay after you get your work done 10$ - 20$</span>
                            </div>
                            <div className="css-177jhv5">
                                <span className="chakra-text css-0">After you get your project ready pay 50$ - 100$</span>
                            </div>
                            <div className="css-1pip4vl">
                                <div className="css-1iiac7s" />
                            </div>
                            <div className="css-177jhv5" />
                            <div className="css-177jhv5">
                                <button onClick={chatNow} className="chakra-link chakra-button css-1wp6drm" >Start for free</button>
                            </div>
                            <div className="css-1ih61vb" style={{ borderRadius: '0px 0px 16px 16px' }}>
                                <button onClick={chatNow} className="chakra-link chakra-button css-i9r3pc">Kick off Now</button>
                            </div>
                            <div className="css-177jhv5">
                                <button onClick={chatNow} className="chakra-link chakra-button css-1wp6drm">Contact Us</button>
                            </div>
                        </div>
                    </div>
                    <div className="css-1x4wznt">
                        <div className="chakra-stack css-me3veq">
                            <div className="chakra-stack css-7tp296">
                                <h4 className="chakra-heading css-12d46le">Simple code</h4>
                                <div className="css-dvxtzn">
                                    <h5 className="chakra-heading css-pzsbl2">Include source code</h5><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="css-1qf55lx">
                                        <path d="M20 6L9 17l-5-5" /></svg>
                                </div>
                                <div className="css-dvxtzn">
                                    <h5 className="chakra-heading css-pzsbl2">Detailed code comments</h5><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="css-1qf55lx">
                                        <path d="M20 6L9 17l-5-5" /></svg>
                                </div>
                                <div className="css-dvxtzn">
                                    <h5 className="chakra-heading css-pzsbl2">Setup file</h5><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="css-1qf55lx">
                                        <path d="M20 6L9 17l-5-5" /></svg>
                                </div>
                                <div className="css-dvxtzn">
                                    <h5 className="chakra-heading css-pzsbl2">Object Oriented Programming</h5><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="css-1qf55lx">
                                        <path d="M5 12h14" /></svg>
                                </div>
                                <div className="css-dvxtzn">
                                    <h5 className="chakra-heading css-pzsbl2">Database integration</h5><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="css-pv2oem">
                                        <path d="M5 12h14" /></svg>
                                </div>
                                <div className="css-dvxtzn">
                                    <h5 className="chakra-heading css-pzsbl2">Delivery time</h5>
                                    <p className="chakra-text css-0">1 day</p>
                                </div>
                                <div className="css-dvxtzn">
                                    <h5 className="chakra-heading css-pzsbl2">Revision</h5>
                                    <p className="chakra-text css-0">3 times</p>
                                </div>
                                <div className="css-dvxtzn">
                                    <h5 className="chakra-heading css-pzsbl2">Price</h5>
                                    <div>
                                        <p className="chakra-text css-0">0$ (No payment required)</p>
                                    </div>
                                </div>
                                <div className="css-dvxtzn">
                                    <button type="button" className="chakra-button css-etvsz2">Start for free</button>
                                </div>
                            </div>
                            <div className="chakra-stack css-7tp296">
                                <h4 className="chakra-heading css-12d46le">Advanced code</h4>
                                <div className="css-dvxtzn">
                                    <h5 className="chakra-heading css-pzsbl2">Include source code</h5><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="css-1qf55lx">
                                        <path d="M20 6L9 17l-5-5" /></svg>
                                </div>
                                <div className="css-dvxtzn">
                                    <h5 className="chakra-heading css-pzsbl2">Detailed code comments</h5><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="css-1qf55lx">
                                        <path d="M20 6L9 17l-5-5" /></svg>
                                </div>
                                <div className="css-dvxtzn">
                                    <h5 className="chakra-heading css-pzsbl2">Setup file</h5><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="css-1qf55lx">
                                        <path d="M20 6L9 17l-5-5" /></svg>
                                </div>
                                <div className="css-dvxtzn">
                                    <h5 className="chakra-heading css-pzsbl2">Object Oriented Programming</h5><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="css-1qf55lx">
                                        <path d="M20 6L9 17l-5-5" /></svg>
                                </div>
                                <div className="css-dvxtzn">
                                    <h5 className="chakra-heading css-pzsbl2">Database integration</h5><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="css-1qf55lx">
                                        <path d="M5 12h14" /></svg>
                                </div>
                                <div className="css-dvxtzn">
                                    <h5 className="chakra-heading css-pzsbl2">Delivery time</h5>
                                    <p className="chakra-text css-0">2-3 Day</p>
                                </div>
                                <div className="css-dvxtzn">
                                    <h5 className="chakra-heading css-pzsbl2">Revisions</h5>
                                    <p className="chakra-text css-0">5 times</p>
                                </div>
                                <div className="css-dvxtzn">
                                    <h5 className="chakra-heading css-pzsbl2">Price</h5>
                                    <div>
                                        <p className="chakra-text css-0">Pay after you get your work done 10$ - 20$</p>
                                    </div>
                                </div>
                                <div className="css-dvxtzn">
                                    <button type="button" className="chakra-button css-1n15ana">Kick off Now</button>
                                </div>
                            </div>
                            <div className="chakra-stack css-7tp296">
                                <h4 className="chakra-heading css-12d46le">Web app</h4>
                                <div className="css-dvxtzn">
                                    <h5 className="chakra-heading css-pzsbl2">Include source code</h5><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="css-1qf55lx">
                                        <path d="M20 6L9 17l-5-5" /></svg>
                                </div>
                                <div className="css-dvxtzn">
                                    <h5 className="chakra-heading css-pzsbl2">Detailed code comments</h5><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="css-1qf55lx">
                                        <path d="M20 6L9 17l-5-5" /></svg>
                                </div>
                                <div className="css-dvxtzn">
                                    <h5 className="chakra-heading css-pzsbl2">Setup file</h5><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="css-1qf55lx">
                                        <path d="M20 6L9 17l-5-5" /></svg>
                                </div>
                                <div className="css-dvxtzn">
                                    <h5 className="chakra-heading css-pzsbl2">Object Oriented Programming</h5><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="css-1qf55lx">
                                        <path d="M20 6L9 17l-5-5" /></svg>
                                </div>
                                <div className="css-dvxtzn">
                                    <h5 className="chakra-heading css-pzsbl2">Database integration</h5><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="css-1qf55lx">
                                        <path d="M20 6L9 17l-5-5" /></svg>
                                </div>
                                <div className="css-dvxtzn">
                                    <h5 className="chakra-heading css-pzsbl2">Delivery time</h5>
                                    <p className="chakra-text css-0">2-7 days</p>
                                </div>
                                <div className="css-dvxtzn">
                                    <h5 className="chakra-heading css-pzsbl2">Revisions</h5>
                                    <p className="chakra-text css-0">Unlimited</p>
                                </div>
                                <div className="css-dvxtzn">
                                    <h5 className="chakra-heading css-pzsbl2">Price</h5>
                                    <div>
                                        <p className="chakra-text css-0">After you get your project ready pay 50$ - 100$</p>
                                    </div>
                                </div>
                                <div className="css-dvxtzn">
                                    <button type="button" className="chakra-button css-1n15ana">Contact us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {1 == 2 &&
                    <div className="chakra-stack css-1bbm1on">
                        <p className="chakra-text css-0">Disk storage cost is $0.25 per GB per month.</p>
                        <p className="chakra-text css-0">Enabling Multi Zone Replication doubles both request and storage price.</p>
                        <p className="chakra-text css-0">See <a target="_blank" rel="noreferrer" className="chakra-link css-18zmx8a" href="https://docs.upstash.com/redis/overall/pricing">pricing page</a> for more information.</p>
                        <p className="chakra-text css-0">Talk to <a target="_blank" rel="noreferrer" className="chakra-link css-18zmx8a" href="https://docs.upstash.com/docs/help/support">us</a> for advanced needs.</p>
                    </div>

                }

            </div>
        </section>

    )
}

export default Pricing
