import React from 'react';
import about_img from "../assets/images/about_arzona_img.webp";
import "./All_css/AboutSection.css";

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import AlgorithSection from './AlgorithmSection';

gsap.registerEffect(useGSAP);
gsap.registerPlugin(ScrollTrigger);


const AboutSection = () => {

  // gsap animation

  useGSAP(()=>{

    gsap.from(".about_info_container",{
      x:"500px",
      opacity:0,
      scrollTrigger:{
        trigger:".about_info_container",
        scroller:"body",
        toggleActions: 'restart pause reverse pause',
        start:"top 80%",
        end:"top 70%",
        scrub:2
      }
    })

    gsap.from(".about_img_box",{
      x:"-500px",
      opacity:0,
      scrollTrigger:{
        trigger:".about_img_box",
        scroller:"body",
        toggleActions: 'restart pause reverse pause',
        start:"top 80%",
        end:"top 70%",
        scrub:2
      }
    })

    gsap.from(".about_img_inside",{
      x:"-500px",
      opacity:0,
      scrollTrigger:{
        trigger:".about_img_inside",
        scroller:"body",
        toggleActions: 'restart pause reverse pause',
        start:"top 80%",
        end:"top 70%",
        scrub:2
      }
    })

  })
  
  return (
    <div className='AboutSection_page'>
      
      <div className='About_section'>
          <div className='about_img_box'>
          <img src={about_img} alt="" />
          </div>
          <div className='about_info_container'>
              <h1>About <span>Arzona</span> Leading the Future of Crypto</h1>
              <div className='about_img_inside'>
                  <img src={about_img} alt="" />
              </div>
              <p>ARZONA is at the forefront of cryptocurrency innovation, offering a unique token system with Proof of Holding and Proof of Burning. We prioritize security, transparency, and user empowerment. Join us to revolutionize your digital asset experience and be part of the future of secure and efficient crypto solutions</p>
              <button className='Buy_btn'> Learn More</button>
          </div>
      </div>

      <AlgorithSection/>
    </div>
  );
};

export default AboutSection;