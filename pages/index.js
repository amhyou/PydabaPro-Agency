import FAQ from "../components/FAQ"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Nums from "../components/Nums"
import Domains from "../components/Domains"
import Pricing from "../components/Pricing"
import Services from "../components/Services"
import Sight from "../components/Sight"
import Testimonials from "../components/Testimonials"
import { useEffect, useState, useRef } from 'react';
import TawkTo from 'tawkto-react'


export default function Home() {
  let Tawk = useRef(null)

  useEffect(() => {
    // if (process.env.NODE_ENV == "production") {
    //   Tawk.current = new TawkTo("66981fcbbecc2fed6926d7ac", "1i313odks")
    // }
    Tawk.current = new TawkTo("66981fcbbecc2fed6926d7ac", "1i313odks")
  }, [])

  function chatNow() {
    if (process.env.NODE_ENV == "production") {
      Tawk.current.toggle()
    }

  }

  return (
    <>
      <Header chatNow={chatNow} />
      <main>
        <Sight chatNow={chatNow} />
        <Services />
        <Pricing chatNow={chatNow} />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}