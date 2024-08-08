import "./All_css/TokenomicSection.css";
import tokenomic_graph from "../assets/images/Arizona_Tokenomic_Img.webp";
import polygonscan_logo from "../assets/icons/polygonscan_logo.png"
import { useEffect, useState } from "react";

export default function Tokenomics() {
  // const ref1 = useIntersectionObserver({
  //     threshold: 0.1,
  //   });
  //   const ref2 = useIntersectionObserver({
  //     threshold: 0.1,
  //   });

  const [copied, setCopied] = useState(false);
  const text = "0xA642a8A49121De423A49edAd019647cE0405DDD1";
  

  const handleCopy = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000); // Hide the popup after 2 seconds
      })
      .catch((err) => {
        console.error("Copy failed: ", err);
      });


      // copy msg showw

      const copy_msg = document.querySelector(".copy_msg");
      copy_msg.classList.add("copy_msg_show");

      setTimeout(()=>{
        copy_msg.classList.remove("copy_msg_show");
      },1000)
  };



  //   animation

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("tokenomic_point_animation");   
          }
         else{
            entry.target.classList.remove("tokenomic_point_animation");   
          }
        });
      }, { threshold: 0.1 });
    
      const tokenomicPoints = document.querySelectorAll(".tokenomic_info_container div");
      tokenomicPoints.forEach((point) => observer.observe(point));
    
      return () => {
        observer.disconnect();
      };
    }, []);


  return (
    <div className="Tokenomic_section_container" id="Tokenomics_Section">
      <h1 className="tokenomic_heiding">
        <span>Arzona </span> Tokenomics Structure and Incentives
      </h1>
      <p className="tokenomic_heiding_info">
        Arzona's tokenomics focuses on creating a sustainable economy,
        incentivizing holding, staking, and participation while ensuring fair
        distribution and value growth
      </p>

      <div className="Tokenomic_body">
        <div className="graph_container grid justify-items-center items-center transform_side">
          <img loading="lazy" src={tokenomic_graph} alt="" />
        </div>

        <div className="tokenomic_info_container">
          <div>
            <p>Token</p> <p>Arzona Token</p>
          </div>
          <div>
            <p>Symbol</p> <p>ARZ</p>
          </div>
          <div>
            <p>Network</p> <p>Matic</p>
          </div>
          <div>
            <p>Presale</p> <p>4 Billion</p>
          </div>
          <div>
            <p>Total</p> <p>14 Billion</p>
          </div>
        </div>
      </div>

      {/*  contract address section */}
      <div className="copy_contract_container">
        <h1>Contract Address</h1>
        <p>0xA642a8A49121De423A49edAd019647cE0405DDD1</p>

        <div className="contract_btn_container">
        <button onClick={handleCopy}>
          <div className="btn_content">
            Copy <i className="fa-regular fa-copy"></i>
          </div>
        </button>

        <a href="https://polygonscan.com/address/0xA642a8A49121De423A49edAd019647cE0405DDD1">
          <button>
            <div className="btn_content">
              <img src={polygonscan_logo} alt="logo" className="polygonscan_logo" />polygonscan
            </div>
          </button>
        </a>

        </div>
        
        <div className="copy_msg">Copied to ClipBoard!</div>
      </div>
    </div>
  );
}
