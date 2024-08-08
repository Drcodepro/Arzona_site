import React, { useEffect, useRef } from 'react';
import PancakeSwap_logo from "../assets/icons/PancakeSwap_logo.png";
import Certik_logo from "../assets/icons/Certik_logo.png";
import CoinGecko_logo from "../assets/icons/CoinGecko_logo.png";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import "./All_css/HeroSection.css";


const HeroSection = () => {

    
    useGSAP(()=>{
        const tl = gsap.timeline();
        tl.from(".HeroSection_discription_container p",{
            x:"-200px",
            opacity:0,
            duration:1
        })

        tl.from(".HeroSection_discription_container h1",{
            scale:0,
            opacity:0,
            duration:0.6
        })


        tl.from(".btn_container",{
            y:"10px",
            scaleY:0,
            opacity:0,
            stagger:0.2,
        })

        gsap.from(".slider",{
            x:"100%",
            opacity:0,
            duration:2,
            stagger:0.2,
        })
    
    })

  return (
    <div className='HeroSection_page' id="heroSection">
        <div className='HeroSection_info_contaienr'>
            <div className='HeroSection_discription_container'>
                <p className='top_p'>Welcome to Arzona Chain</p>
                <h1 className='main_h'>Unlock the Potential of Your Investments with <span>Arzona</span></h1>
                <p className='bottum_p'>Welcome to ARZONA, the cutting-edge token transforming the crypto landscape with Proof of Holding and Proof of Burning. Experience unparalleled security, transparency, and innovation. Elevate your digital asset portfolio and join the future of cryptocurrency with ARZONA. Invest smart, invest secure – join us today and make your crypto journey remarkable</p>
            </div>
            <div className='btn_container'>
                <button className='Buy_btn'>Buy Now</button>
            </div>
        </div>

         
        <div className="slider" >
    
            <div className="list">
    
                <div className="item i1" ><img src={PancakeSwap_logo} alt=""/></div>
                <div className="item i2" ><img src={Certik_logo} alt=""/></div>
                <div className="item i3" ><img src={CoinGecko_logo} alt=""/></div>
                <div className="item i4" ><img src={PancakeSwap_logo} alt=""/></div>
                <div className="item i5" ><img src={Certik_logo} alt=""/></div>
                <div className="item i6" ><img src={CoinGecko_logo} alt=""/></div>
                <div className="item i7" ><img src={PancakeSwap_logo} alt=""/></div>
                <div className="item i8" ><img src={Certik_logo} alt=""/></div>
                <div className="item i9" ><img src={CoinGecko_logo} alt=""/></div>
               
    
            </div>
        </div> 

    </div>
  );
};

export default HeroSection;