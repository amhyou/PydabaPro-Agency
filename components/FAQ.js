import { useState, useEffect } from 'react'

const divar1 = ["1poi1m1", "1jwuy7s"]
const divar2 = [false, true]
const divar3 = ["mrt2mk", "1tkizc6"]
const divar4 = ["1gd7jdl", "4cq5wz"]
const divar5 = [{ overflow: 'hidden', display: 'none', opacity: 0, height: 0 }, { overflow: 'hidden', display: 'block', opacity: 1, height: 'auto' }]

const faqs = [
    { question: "Is it really free to choose the Simple code service ?", answer: "Yes of course, you can chat with us right now and we will start discuss what your task requires, and as soon as we understand your task we will begin to program it for you for free, and you will receive it in at most 2 days." },
    { question: "What is the difference between Simple and Advanced code ?", answer: "An Advanced code is the one that requires not most common librairies or needs more complex paradigms like concurrency and multithreading, otherwise Simple code is a direct use of the most common syntax and librairies." },
    { question: "What type of Web App I can order to be made ?", answer: "You have the choice to tell us to clone a website that you like, or if you have a good idea we can make it using the React front-end Nextjs/Django/Flask Back-end. Another thing is if you want a microservice like a service for sending Emails or SMS or a script that compute something to support your already existing website we can make very quickly." },
    { question: "How can I be sure that the work will be done ?", answer: "We have talented programmers that dedicated therselves to computer science and competitive programming, we deliver work even before deadline, plus you will not pay a penny until you receive your complete project." },
    { question: "What are methods of payment that you have ?", answer: "We send you a Paypal invoice that you can pay with your Credit/Debit card or your Paypal, also we can send you a Crypto invoice if you want so and you can pay it with any cryptocurrency that you prefer." },
    { question: "Can I get a support to run or deploy my project ?", answer: "Yes of course, we continuously stay in touch to guide you until you understand how the project will be run or how to be deployed." },

]
const faqNum = faqs.length
let arraydiv = new Array(faqNum).fill(0); arraydiv[0] = 1

const FAQ = () => {

    const [divs, setDivs] = useState(arraydiv)

    function readFaq(i) {
        let subD = new Array(faqNum).fill(0)
        subD[i] = 1
        setDivs(subD)
    }

    return (
        <section id="section-faqs" className="css-83jqkx">
            <div className="chakra-container css-7mriav">
                <header className="css-0">
                    <h2 className="chakra-heading css-1jkx6l7">FAQ</h2>
                    <div className="chakra-container css-llo4ky">
                        <p className="chakra-text css-z78z5r">Frequently Asked Questions</p>
                    </div>
                </header>
                <div className="chakra-accordion css-1smket5">

                    {faqs.map((e, i) => {
                        return (
                            <div onClick={() => { readFaq(i) }} className="chakra-accordion__item css-w8e65v" key={i}>
                                <div className={`css-${divar1[divs[i]]}`}>
                                    <button type="button" id="accordion-button-2" aria-expanded={divar2[divs[i]]} aria-controls="accordion-panel-2" className={`chakra-accordion__button css-${divar3[divs[i]]}`} data-index={i - 1}>
                                        <h4 className="chakra-heading css-w5v002">{e.question}</h4><svg viewBox="0 0 24 24" focusable="false" className={`chakra-icon chakra-accordion__icon css-${divar4[divs[i]]}`} aria-hidden="true">
                                            <path fill="currentColor" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" /></svg></button>
                                    <div className="chakra-collapse" style={divar5[divs[i]]}>
                                        <div role="region" id="accordion-panel-2" aria-labelledby="accordion-button-2" className="chakra-accordion__panel css-10z2hc9">
                                            <div className="chakra-stack css-1rsw6tr">
                                                <p className="chakra-text css-0">{e.answer}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="chakra-stack__divider css-vuul1z" />
                            </div>
                        )
                    })}



                </div>
                {1 == 2 &&
                    <div className="css-14bs28v">
                        <a target="_blank" rel="noreferrer" className="chakra-link css-18zmx8a" href="https://docs.upstash.com/help/faq">See more FAQs<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="css-1dh6g8h">
                            <path d="M7 17L17 7M7 7h10v10" /></svg></a>
                    </div>
                }

            </div>
        </section>

    )
}

export default FAQ
