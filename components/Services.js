import { useState } from "react"
const lm = (link) => {
    return (<div className="css-1ayfwcb">
        <a target="_blank" rel="noreferrer" className="chakra-link css-18zmx8a" href={link}>Learn more<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="css-1dh6g8h">
            <path d="M7 17L17 7M7 7h10v10" /></svg></a>
    </div>)
}

const Services = () => {
    const [learnmore, setLearnmore] = useState(false)
    return (
        <section id="section-services" className="css-w1li0c">
            <div className="chakra-container css-7mriav"><h1>Our services :</h1><br />
                <div className="css-rvii2r">
                    <div className="css-fkpz5x">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="css-1gvixmz">
                            <path fill="currentColor" d="M16,31.36C7.53,31.36,0.64,24.47,0.64,16S7.53,0.64,16,0.64S31.36,7.53,31.36,16 S24.47,31.36,16,31.36z M15.385,30.627c0.204,0.009,0.409,0.013,0.615,0.013c4.741,0,8.963-2.265,11.64-5.77V12.008h0.721v11.831 c1.442-2.268,2.279-4.957,2.279-7.839c0-1.999-0.402-3.904-1.13-5.641L18.363,3.924l0.36-0.624l10.249,5.917 c-2.174-4.141-6.273-7.119-11.101-7.738L6.723,7.916l-0.36-0.624l10.252-5.919C16.412,1.364,16.206,1.36,16,1.36 c-4.741,0-8.963,2.266-11.64,5.771v12.862H3.64V8.161C2.197,10.429,1.36,13.119,1.36,16c0,1.998,0.402,3.903,1.13,5.641 l11.147,6.436l-0.36,0.623L3.028,22.782c2.174,4.142,6.273,7.12,11.101,7.739l11.148-6.437l0.359,0.623L15.385,30.627z M23.5,20.36 c-1.025,0-1.86-0.835-1.86-1.86s0.835-1.86,1.86-1.86s1.86,0.834,1.86,1.86S24.525,20.36,23.5,20.36z M23.5,17.36 c-0.629,0-1.14,0.511-1.14,1.14s0.511,1.14,1.14,1.14s1.14-0.511,1.14-1.14S24.129,17.36,23.5,17.36z M13.5,20.36 c-1.025,0-1.86-0.835-1.86-1.86s0.834-1.86,1.86-1.86s1.86,0.834,1.86,1.86S14.525,20.36,13.5,20.36z M13.5,17.36 c-0.628,0-1.14,0.511-1.14,1.14s0.512,1.14,1.14,1.14s1.14-0.511,1.14-1.14S14.128,17.36,13.5,17.36z M18.86,20h-0.72v-3h0.721 L18.86,20L18.86,20z M8.86,20H8.14v-3h0.72C8.86,17,8.86,20,8.86,20z M18.5,15.36c-1.025,0-1.86-0.834-1.86-1.86 s0.834-1.86,1.86-1.86s1.86,0.834,1.86,1.86S19.525,15.36,18.5,15.36z M18.5,12.36c-0.629,0-1.14,0.512-1.14,1.14 s0.511,1.14,1.14,1.14s1.14-0.512,1.14-1.14S19.129,12.36,18.5,12.36z M8.5,15.36c-1.025,0-1.86-0.834-1.86-1.86 s0.834-1.86,1.86-1.86s1.86,0.834,1.86,1.86S9.525,15.36,8.5,15.36z M8.5,12.36c-0.628,0-1.14,0.512-1.14,1.14s0.512,1.14,1.14,1.14 s1.14-0.512,1.14-1.14S9.128,12.36,8.5,12.36z M23.86,15h-0.72v-3h0.721L23.86,15L23.86,15z M13.86,15h-0.72v-3h0.72V15z" /></svg>
                        <h4 className="chakra-heading css-y72xfh">Write simple code <span className="chakra-badge css-1x264wi">Free</span></h4>
                        <div className="css-1ayfwcb">
                            <p className="chakra-text css-ogm61u">We provide this service for people that are stuck to write some code that does not require a lot of third-party packages, with no fees at all, you can try to contact us to see for yourself.</p>
                        </div>
                        {learnmore && lm("https://docs.upstash.com/overall/durability")}
                    </div>
                    <div className="css-fkpz5x">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="css-1gvixmz">
                            <path fill="currentColor" d="M30,30.36h-4c-0.199,0-0.36-0.161-0.36-0.36v-4c0-0.199,0.161-0.36,0.36-0.36h4 c0.199,0,0.36,0.161,0.36,0.36v4C30.36,30.199,30.199,30.36,30,30.36z M26.36,29.64h3.279v-3.28H26.36V29.64z M24,30.36h-4 c-0.199,0-0.36-0.161-0.36-0.36v-4c0-0.199,0.161-0.36,0.36-0.36h4c0.199,0,0.36,0.161,0.36,0.36v4 C24.36,30.199,24.199,30.36,24,30.36z M20.36,29.64h3.279v-3.28H20.36V29.64z M18,30.36h-4c-0.199,0-0.36-0.161-0.36-0.36v-4 c0-0.199,0.161-0.36,0.36-0.36h4c0.199,0,0.36,0.161,0.36,0.36v4C18.36,30.199,18.199,30.36,18,30.36z M14.36,29.64h3.28v-3.28 h-3.28V29.64z M6,30.36H2c-0.199,0-0.36-0.161-0.36-0.36v-4c0-0.199,0.161-0.36,0.36-0.36h4c0.199,0,0.36,0.161,0.36,0.36v4 C6.36,30.199,6.199,30.36,6,30.36z M2.36,29.64h3.28v-3.28H2.36V29.64z M30,24.36h-4c-0.199,0-0.36-0.161-0.36-0.36v-4 c0-0.199,0.161-0.36,0.36-0.36h4c0.199,0,0.36,0.161,0.36,0.36v4C30.36,24.199,30.199,24.36,30,24.36z M26.36,23.64h3.279v-3.28 H26.36V23.64z M24,24.36h-4c-0.199,0-0.36-0.161-0.36-0.36v-4c0-0.199,0.161-0.36,0.36-0.36h4c0.199,0,0.36,0.161,0.36,0.36v4 C24.36,24.199,24.199,24.36,24,24.36z M20.36,23.64h3.279v-3.28H20.36V23.64z M12,24.36H8c-0.199,0-0.36-0.161-0.36-0.36v-4 c0-0.199,0.161-0.36,0.36-0.36h4c0.199,0,0.36,0.161,0.36,0.36v4C12.36,24.199,12.199,24.36,12,24.36z M8.36,23.64h3.28v-3.28H8.36 V23.64z M30,18.36h-4c-0.199,0-0.36-0.161-0.36-0.36v-4c0-0.199,0.161-0.36,0.36-0.36h4c0.199,0,0.36,0.161,0.36,0.36v4 C30.36,18.199,30.199,18.36,30,18.36z M26.36,17.64h3.279v-3.28H26.36V17.64z M18,18.36h-4c-0.199,0-0.36-0.161-0.36-0.36v-4 c0-0.199,0.161-0.36,0.36-0.36h4c0.199,0,0.36,0.161,0.36,0.36v4C18.36,18.199,18.199,18.36,18,18.36z M14.36,17.64h3.28v-3.28 h-3.28V17.64z M12,18.36H8c-0.199,0-0.36-0.161-0.36-0.36v-4c0-0.199,0.161-0.36,0.36-0.36h4c0.199,0,0.36,0.161,0.36,0.36v4 C12.36,18.199,12.199,18.36,12,18.36z M8.36,17.64h3.28v-3.28H8.36V17.64z M30,12.36h-4c-0.199,0-0.36-0.161-0.36-0.36V8 c0-0.199,0.161-0.36,0.36-0.36h4c0.199,0,0.36,0.161,0.36,0.36v4C30.36,12.199,30.199,12.36,30,12.36z M26.36,11.64h3.279V8.36 H26.36V11.64z M24,12.36h-4c-0.199,0-0.36-0.161-0.36-0.36V8c0-0.199,0.161-0.36,0.36-0.36h4c0.199,0,0.36,0.161,0.36,0.36v4 C24.36,12.199,24.199,12.36,24,12.36z M20.36,11.64h3.279V8.36H20.36V11.64z M18,12.36h-4c-0.199,0-0.36-0.161-0.36-0.36V8 c0-0.199,0.161-0.36,0.36-0.36h4c0.199,0,0.36,0.161,0.36,0.36v4C18.36,12.199,18.199,12.36,18,12.36z M14.36,11.64h3.28V8.36h-3.28 V11.64z M6,12.36H2c-0.199,0-0.36-0.161-0.36-0.36V8c0-0.199,0.161-0.36,0.36-0.36h4c0.199,0,0.36,0.161,0.36,0.36v4 C6.36,12.199,6.199,12.36,6,12.36z M2.36,11.64h3.28V8.36H2.36V11.64z M30,6.36h-4c-0.199,0-0.36-0.161-0.36-0.36V2 c0-0.199,0.161-0.36,0.36-0.36h4c0.199,0,0.36,0.161,0.36,0.36v4C30.36,6.199,30.199,6.36,30,6.36z M26.36,5.64h3.279V2.36H26.36 V5.64z M24,6.36h-4c-0.199,0-0.36-0.161-0.36-0.36V2c0-0.199,0.161-0.36,0.36-0.36h4c0.199,0,0.36,0.161,0.36,0.36v4 C24.36,6.199,24.199,6.36,24,6.36z M20.36,5.64h3.279V2.36H20.36V5.64z M12,6.36H8C7.801,6.36,7.64,6.199,7.64,6V2 c0-0.199,0.161-0.36,0.36-0.36h4c0.199,0,0.36,0.161,0.36,0.36v4C12.36,6.199,12.199,6.36,12,6.36z M8.36,5.64h3.28V2.36H8.36V5.64z" /></svg>
                        <h4 className="chakra-heading css-y72xfh">Write complex code </h4>
                        <div className="css-1ayfwcb">
                            <p className="chakra-text css-ogm61u">This service is meant for projects that need expertise in programming, wethere you want to code a robot to automate some task or develop a tool or a microservice, we provide a robust solution for all these problems.</p>
                        </div>
                        {learnmore && lm("https://docs.upstash.com/kafka/")}
                    </div>
                    <div className="css-fkpz5x">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="css-1gvixmz">
                            <path fill="currentColor" d="M16,31.36c-1.577,0-2.86-1.283-2.86-2.86s1.283-2.86,2.86-2.86s2.86,1.283,2.86,2.86 S17.577,31.36,16,31.36z M16,26.36c-1.18,0-2.14,0.96-2.14,2.14s0.96,2.14,2.14,2.14s2.14-0.96,2.14-2.14S17.18,26.36,16,26.36z M20.558,28.037l-0.256-0.674c3.255-1.236,5.825-3.81,7.052-7.06l0.674,0.254C26.728,24.001,24.005,26.727,20.558,28.037z M11.442,28.037C7.994,26.726,5.271,24,3.973,20.558l0.674-0.254c1.226,3.249,3.795,5.822,7.051,7.06L11.442,28.037z M16,23.36 c-4.058,0-7.36-3.303-7.36-7.361S11.942,8.64,16,8.64c4.059,0,7.36,3.302,7.36,7.36S20.059,23.36,16,23.36z M14.552,22.481 c0.466,0.104,0.951,0.158,1.448,0.158c3.217,0,5.906-2.299,6.512-5.34h-0.905c-0.334,0-0.644-0.18-0.809-0.468l-1.117-1.94 c-0.164-0.287-0.164-0.644,0.001-0.93l1.328-2.315c-1.121-1.289-2.73-2.142-4.537-2.27l0.715,1.238 c0.219,0.378,0.147,0.85-0.171,1.147l-1.858,1.737c-0.072,0.068-0.088,0.175-0.039,0.261l2.687,4.667 c0.218,0.375,0.148,0.846-0.169,1.144L14.552,22.481z M12.996,21.921c0.243,0.124,0.495,0.233,0.755,0.327l3.394-3.202 c0.072-0.068,0.088-0.174,0.039-0.259l-2.688-4.668c-0.217-0.377-0.147-0.849,0.172-1.146l1.858-1.737 c0.072-0.067,0.088-0.175,0.039-0.261L15.638,9.37c-2.258,0.122-4.219,1.377-5.324,3.206l0.69,1.188 c0.038,0.065,0.108,0.106,0.184,0.106h1.845c0.333,0,0.642,0.179,0.808,0.466l0.758,1.312c0.217,0.376,0.148,0.847-0.168,1.146 l-1.017,0.956c-0.072,0.067-0.088,0.175-0.038,0.261l0.671,1.163c0.167,0.287,0.167,0.645,0,0.933L12.996,21.921z M9.92,13.332 C9.56,14.148,9.36,15.051,9.36,16c0,2.324,1.2,4.373,3.013,5.56l1.05-1.815c0.038-0.065,0.038-0.146,0-0.211l-0.671-1.164 c-0.217-0.377-0.148-0.849,0.169-1.146l1.016-0.955c0.072-0.068,0.088-0.175,0.039-0.261l-0.758-1.312 c-0.038-0.066-0.108-0.106-0.184-0.106h-1.845c-0.331,0-0.64-0.178-0.807-0.464L9.92,13.332z M21.486,12.263l-1.181,2.058 c-0.038,0.065-0.038,0.146,0,0.212l1.117,1.941c0.037,0.066,0.107,0.107,0.184,0.107h1.009c0.017-0.191,0.024-0.385,0.024-0.581 C22.64,14.615,22.214,13.328,21.486,12.263z M28.5,18.86c-1.577,0-2.86-1.283-2.86-2.86s1.283-2.86,2.86-2.86s2.86,1.283,2.86,2.86 S30.077,18.86,28.5,18.86z M28.5,13.86c-1.18,0-2.14,0.96-2.14,2.14s0.96,2.14,2.14,2.14s2.14-0.96,2.14-2.14 C30.64,14.82,29.68,13.86,28.5,13.86z M3.5,18.86c-1.577,0-2.86-1.283-2.86-2.86s1.283-2.86,2.86-2.86S6.36,14.423,6.36,16 S5.077,18.86,3.5,18.86z M3.5,13.86c-1.18,0-2.14,0.96-2.14,2.14s0.96,2.14,2.14,2.14S5.64,17.18,5.64,16S4.68,13.86,3.5,13.86z M27.354,11.698c-1.234-3.247-3.805-5.817-7.052-7.052l0.256-0.673c3.438,1.307,6.161,4.029,7.47,7.469L27.354,11.698z M4.646,11.698l-0.673-0.256c1.308-3.439,4.029-6.161,7.468-7.469l0.256,0.673C8.451,5.881,5.881,8.451,4.646,11.698z M16,6.36 c-1.577,0-2.86-1.283-2.86-2.86S14.423,0.64,16,0.64s2.86,1.283,2.86,2.86S17.577,6.36,16,6.36z M16,1.36 c-1.18,0-2.14,0.96-2.14,2.14S14.82,5.64,16,5.64s2.14-0.96,2.14-2.14S17.18,1.36,16,1.36z" /></svg>
                        <h4 className="chakra-heading css-y72xfh">Website with Django|Flask|Reactjs</h4>
                        <div className="css-1ayfwcb">
                            <p className="chakra-text css-ogm61u">If you want a Web App wethere it is a completely brand new website or a supportive service relative to an existing website, backed with a database of your choice, deployed in any platform you want (VPS, Heroku, PythonAnywhere...) or in form of a Docker image to run it anywhere you want.</p>
                        </div>
                        {learnmore && lm("https://docs.upstash.com/redis/features/globaldatabase")}
                    </div>
                    <div className="css-fkpz5x">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="css-1gvixmz">
                            <path fill="currentColor" d="M18.36,17c0,0.75-0.61,1.36-1.36,1.36h-0.64v1.14h-0.72v-1.14H14v-0.72h3 c0.353,0,0.64-0.287,0.64-0.64c0-0.353-0.287-0.64-0.64-0.64h-2c-0.75,0-1.359-0.61-1.359-1.36s0.61-1.36,1.359-1.36h0.641V12.5 h0.72v1.14H18v0.72h-3c-0.353,0-0.64,0.287-0.64,0.64s0.287,0.64,0.64,0.64h2C17.75,15.64,18.36,16.25,18.36,17z M23.238,18.36 l-0.451,1.089l1.5,1.5l-3.338,3.338l-1.5-1.5l-1.089,0.451v2.122h-4.72v-2.122l-1.09-0.451l-1.5,1.5l-3.338-3.338l1.5-1.5 L8.761,18.36H6.64v-4.72h2.121l0.451-1.09l-1.5-1.5l3.338-3.338l1.5,1.5l1.09-0.451V6.64h4.72v2.121l1.089,0.451l1.5-1.5 l3.338,3.338l-1.5,1.5l0.451,1.09h2.122v4.72H23.238z M21.938,19.619l0.82-1.979h1.882v-3.28h-1.882l-0.82-1.979l1.332-1.331 l-2.32-2.319l-1.33,1.331l-1.98-0.819V7.36h-3.28v1.883l-1.979,0.819L11.05,8.731L8.731,11.05l1.331,1.331L9.243,14.36H7.36v3.28 h1.883l0.819,1.979l-1.331,1.33l2.319,2.32l1.331-1.332l1.979,0.82v1.882h3.28v-1.882l1.979-0.82l1.33,1.332l2.32-2.32 L21.938,19.619z M16,1.36c4.402,0,8.465,1.915,11.257,5.28H24v0.72h4.36V3h-0.72v2.978C24.717,2.572,20.53,0.64,16,0.64 C7.53,0.64,0.64,7.53,0.64,16h0.72C1.36,7.927,7.927,1.36,16,1.36z M30.64,16c0,8.072-6.567,14.64-14.64,14.64 c-4.402,0-8.465-1.915-11.257-5.279H8V24.64H3.64V29h0.72v-2.978C7.283,29.428,11.47,31.36,16,31.36c8.47,0,15.36-6.891,15.36-15.36 H30.64z" /></svg>
                        <h4 className="chakra-heading css-y72xfh">Revise your own code <span className="chakra-badge css-1x264wi">New</span></h4>
                        <div className="css-1ayfwcb">
                            <p className="chakra-text css-ogm61u">If your code has a bug we will help you to find it and fix it, or if your code is incomplete and need assistance we can provide you with all the help you want to finish your work or project without struggle.</p>
                        </div>
                        {learnmore && lm("https://docs.upstash.com/redis/overall/pricing")}
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Services
