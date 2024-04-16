import React from 'react'
import Hero from '../components/Hero'
import Biography from '../components/Biography'
import aboutusImg from "../assets/about.png"
import whoweareImg from "../assets/whoweare.png"

function AboutUs() {
  return (
    <>
      <Hero title={"Learn More About Us | ZeeCare Medical Institute"} img src={aboutusImg} alt="" />
    
      <Biography img src={whoweareImg} alt="" />
    
    </>
  )
}

export default AboutUs