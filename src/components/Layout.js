import React, { useEffect } from "react"
import Helmet from "react-helmet"

import { initiateGsap } from "../assets/js/gsapAnimations"
import { cssAnimations } from "../assets/js/cssAnimations"
import { jsSiteUtils } from "../assets/js/jsSiteUtils"

import MainNav from "./MainNav"
import Hero from "./Hero"
import Introductions from "./Introductions"
import Experience from "./Experience"
import AboutSite from "./AboutSite"
import Contact from "./Contact"
import TopButton from "./TopButton"
import Button from "./Button"

const Layout = () => {

  useEffect(() => {
    if (typeof window !== `undefined`) {
      initiateGsap()
    }
  }, [])

  return (
    <>
      <Helmet htmlAttributes={{ lang: "en-GB" }}>
        <title>A Working Copy – for experimentation and discovery</title>
        <meta name="googlebot" content="noindex" />
        {/* Structured Data is omitted for SEO, given the temporary nature of the site */}
        <body id="home" className="px-md-3" />
      </Helmet>
      <header className="header">
        <MainNav />
        <Hero inView={jsSiteUtils.inView} cssAnimations={cssAnimations} />
      </header>
      <main>
        <Introductions />
        <Experience />
        <AboutSite />
        <Contact />
        <TopButton />
      </main>
      <footer className="border-top pt-2 pb-5 mb-5 pl-3 text-secondary small">
        &copy; {new Date().getFullYear()}
      </footer>
    </>
  )
}

export default Layout


