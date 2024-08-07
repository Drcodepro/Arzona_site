import React from 'react';
import "./All_css/RoadMapSection.css";
import { useRef } from 'react';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerEffect(useGSAP);
gsap.registerPlugin(ScrollTrigger);


const RoadMapSection = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);


  // gsap animation

  useGSAP(()=>{

    gsap.from(".Roadmap_main .progress",{
      height:"0%",
      duration:5,
      scrollTrigger:{
        trigger:".Roadmap_main .progress",
        scroller:"body",
        toggleActions: 'restart pause reverse pause',
        start:"top 20%",
        end:"top -100%",
        scrub:2
      }
    })


    gsap.from(ref1.current,{
      x:"-300px",
      opacity:0,
      duration:1,
      scrollTrigger:{
        trigger:ref1.current,
        scroller:"body",
        toggleActions: 'restart pause reverse pause',
        start:"top 70%",
        end:"top 65%",
        scrub:2
      }
    })

    gsap.from(ref2.current,{
      x:"300px",
      opacity:0,
      duration:1,
      scrollTrigger:{
        trigger:ref2.current,
        scroller:"body",
        toggleActions: 'restart pause reverse pause',
        start:"top 70%",
        end:"top 65%",
        scrub:2
      }
    })

    gsap.from(ref3.current,{
      x:"-300px",
      opacity:0,
      duration:1,
      scrollTrigger:{
        trigger:ref3.current,
        scroller:"body",
        toggleActions: 'restart pause reverse pause',
        start:"top 70%",
        end:"top 65%",
        scrub:2
      }
    })

    gsap.from(ref4.current,{
      x:"300px",
      opacity:0,
      duration:1,
      scrollTrigger:{
        trigger:ref4.current,
        scroller:"body",
        toggleActions: 'restart pause reverse pause',
        start:"top 70%",
        end:"top 65%",
        scrub:2
      }
    })


  })


  return (
    <div className='RoadMapSection_page'>
      <div className='heading_container'>
        <h1><span>Arzona</span> Roadmap: Development Milestones</h1>
        <p>The ARZONA roadmap outlines key development phases, including token launch, staking implementation, security audits, and community engagement initiatives</p>
      </div>

      <div className='Roadmap_main'>

        <div className='progress'></div>

       <div ref={ref1} className='roadmap_point_box right_side'> 
          <div className='content_box'>
            <div className='point_num'>1</div>
            <p>Conceptualiztion and Research/Presale (Months 1-3)</p>
            <ul>
              <li>Market Analysis</li>
              <li>Algorithm Development</li>
              <li>White Paper Publication</li>
              <li>Pre-sale Launch</li>
              <li>Fundraising for Mining Operations</li>
            </ul>
          </div>
        </div>

        
        <div ref={ref2} className='roadmap_point_box left_side'> 
          <div className='content_box'>
            <div className='point_num'>2</div>
            <p>Development and Testing (Months 10-14)</p>
            <ul>
              <li>Blockchain Development</li>
              <li>Smart Contract Integration</li>
              <li>Security Testing and Audits</li>
            </ul>
          </div>
        </div>

        
       <div ref={ref3} className='roadmap_point_box right_side'> 
          <div className='content_box'>
            <div className='point_num'>3</div>
            <p>Launch and Expansion (Months 14-18)</p>
            <ul>
              <li>Mainnet Launch</li>
              <li>Major Exchange Listings</li>
              <li>Distribution of PoH Rewards</li>
              <li>Expansion of Mining Operations</li>
            </ul>
          </div>
        </div>

        
       <div ref={ref4} className='roadmap_point_box left_side'> 
          <div className='content_box'>
            <div className='point_num'>4</div>
            <p>Continuous Improvement (Months 18 and Beyond)</p>
            <ul>
              <li>Ongoing Development and Features Updates</li>
              <li>Community Engagement and Feedback</li>
              <li>Strategic Partnership and Integrations</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RoadMapSection;