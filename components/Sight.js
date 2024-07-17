import { useState, useEffect, useMemo } from "react"

const toPrint = ["Idea ", "Project ", "Website ", "Service "]

const Sight = ({ chatNow }) => {
    const [where, setWhere] = useState(0)
    const [obj, setObj] = useState("")

    useEffect(() => {
        if (obj.length == toPrint[where].length - 1 && where < toPrint.length - 1) {
            setWhere(w => { return w + 1 })
            const timeout = setTimeout(() => {
                setObj("")
            }, 2000)

            return () => clearTimeout(timeout)
        }
        else {
            const timeout = setTimeout(() => {
                setObj(toPrint[where].slice(0, obj.length + 1))
            }, 200)

            return () => clearTimeout(timeout)
        }
        // eslint-disable-next-line
    }, [obj])


    return (
        <section className="css-17dqp39">
            <div className="chakra-container css-7mriav">
                <div>
                    <h1 className="chakra-heading css-19qu5s9">We write Python</h1>
                    <div>
                        <h1 className="chakra-heading css-19qu5s9">Code for</h1>
                        <div className="Typist">
                            <h1 className="chakra-heading css-19qu5s9"><span>your</span> <span>{obj}</span><span className="Cursor Cursor--blinking">|</span></h1>
                        </div>
                    </div>
                </div>
                <div className="css-1js12rg">
                    <p className="chakra-text css-0">As fast as possible</p>
                    <p className="chakra-text css-0">As cheap as Free</p>
                </div><button onClick={chatNow} className="chakra-link chakra-button css-i06ij1">Start free in 10 seconds</button>

                {1 == 2 &&
                    <div className="chakra-stack css-a0ov60">
                        <a className="chakra-link css-hy8o07" href="https://upstash.com/redis"><span className="css-cqerdp">#</span>redis</a><a className="chakra-link css-hy8o07" href="https://upstash.com/kafka"><span className="css-cqerdp">#</span>kafka</a> <a className="chakra-link css-hy8o07" href="https://upstash.com/cloudflareworkers"><span className="css-cqerdp">#</span>edge</a>
                    </div>}
                <br /><br /><br />
            </div>
        </section >

    )
}

export default Sight
