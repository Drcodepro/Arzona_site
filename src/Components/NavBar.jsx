import { useState ,useEffect} from "react";
import arizon_logo from "../assets/icons/arzona_logo.svg";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import "./All_css/NavBar.css";


export default function NavBar(){
    const [isvisible,setisvisible] = useState(false);
    useEffect(() => {
        const navbar = document.querySelector(".nav_navigation_container")
        navbar.classList.add("animateNav");

 },[isvisible]);

    function handleIsVisible(){
        setisvisible(!isvisible);
    }


    // Gsap animation

    useGSAP(()=>{
        const tl = gsap.timeline();
        tl.from("#navBar",{
            y:"-4rem",
            opacity:0,
            duration:1
        })

        tl.from(".Arzona_logo",{
            x:"-20px",
            opacity:0,
            duration:0.5
        })

        tl.from(".nav_btn_container ",{
            x:"20px",
            opacity:0,
            duration:0.5
        })
        tl.from(".nav_navigation_container a",{
            y:"-10px",
            opacity:0,
            stagger:0.2,
        })
    })

    return(
    <div className=" nav_container" id="navBar">
        <img loading="lazy" src={arizon_logo } alt="" className="Arzona_logo" />

        <div  className={`${isvisible  ?  "none" :"navIsHidden "} nav_navigation_container`}>
           
               <a href="#heroSection" onClick={handleIsVisible}><div className="nav_navigation flex" >Home</div></a>

               <hr />

               <a href="#aboutSection" onClick={handleIsVisible}><div className="nav_navigation flex" >About Us</div></a>

               <hr />

               <a href="#Tokenomics_Section" onClick={handleIsVisible}><div className="nav_navigation flex" >Tokenomic</div></a>
             
               <hr />

               <a href="#roadMapSection" onClick={handleIsVisible}><div className="nav_navigation flex" >RoadMap</div></a>
               
               {/* <hr />

               <a href="#whyChooseSection"><div className="nav_navigation flex" >Why To Choose</div></a> */}

               <hr />

                <a href="#footer" onClick={handleIsVisible}><div className="nav_navigation"  >Contact Us</div></a>
                
            </div>
            <div className="nav_btn_container">
            <button className="SignIN_btn">Sign In</button>
            </div>
              

            <div className= "toggle_nav_button" onClick={handleIsVisible}>
                <i className="fa-solid fa-bars fa-xl"></i>        
            </div>

    </div>)     
}