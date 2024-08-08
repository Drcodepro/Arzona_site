import React, { useEffect } from "react";
import "./All_css/AlgorithmSection.css";
const AlgorithSection = () => {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("algo_box_animation"); 
          }
         else{
            entry.target.classList.remove("algo_box_animation"); 
          }
        });
      }, { threshold: 0.1 });
    
      const tokenomicPoints_back = document.querySelectorAll(".Algo_main_container .back");
      const tokenomicPoints_front = document.querySelectorAll(".Algo_main_container .front");
      tokenomicPoints_front.forEach((point) => observer.observe(point));
      tokenomicPoints_back.forEach((point) => observer.observe(point));


      // flep animation on mouse click
      
  const algo_box = document.querySelectorAll(".Algo_main_container .box");

    algo_box.forEach((box)=>{

      box.addEventListener("mouseover",()=>{
        algo_box.forEach((otherBox) => {
          otherBox.style.transform = "rotateY(0deg)";
        });

        box.style.transform = "rotateY(180deg)";      })
    })
  
    return () => {
      observer.disconnect();
    };

  }, []);

  return (
    <div className="AlgorithmSection_page">
        
      <div className="heading_container">
        <h1>Consensus Algorithms in <span>Arzona </span> Blockchain</h1>
        <p>
          Consensus algorithms in ARZONA enhance security, promote
          decentralization, incentivize user participation, ensure transaction
          validity, reduce the risk of fraud, and increase overall network
          efficiency
        </p>
      </div>

      <div className="Algo_main_container">
       
        <div className="box miniBox1">
           <div className="front">
                <div className="content">
                  <p>
                    Arzona <br /> <span>Proof Of Work</span>
                  </p>
                </div>
            </div>
            
            <div className="back">
                <div className="content">
                  <p>
                  Proof of Work (PoW) is a consensus mechanism used in blockchain technology to validate transactions and secure the network. It requires participants, known as miners, to perform computational work to solve complex mathematical problems. The first miner to solve the problem gets to add the next block to the blockchain and is rewarded with newly minted tokens.
                  </p>
                </div>
            </div>
        </div>

        <div className="box bigBox">
            <div className="front">
                <div className="content">
                  <p>
                    Arzona <br /> <span>Consensus Algorithms</span>
                  </p>
                </div>
            </div>
            
            <div className="back">
                <div className="content">
                  <p>
                  Consensus algorithms are critical for ensuring the security, integrity, and decentralized nature of blockchain networks. They enable network participants to reach an agreement on the state of the blockchain, ensuring that all nodes maintain a consistent ledger. ARZONA employs several consensus mechanisms, each with unique features and benefits.
                  </p>
                </div>
            </div>
        </div>

        <div className="box miniBox2">
           <div className="front">
                <div className="content">
                  <p>
                    Arzona <br /> <span>Stake Token</span>
                  </p>
                </div>
            </div>
            
            <div className="back">
                <div className="content">
                  <p>
                  Proof of Holding (PoH) is a mechanism designed to incentivize long-term ownership of tokens within the ARZONA ecosystem. Unlike traditional consensus mechanisms like Proof of Work (PoW) or Proof of Staking (PoS), PoH rewards users simply for holding onto their tokens over a specified period.
                  </p>
                </div>
            </div>
        </div>

        <div className="box miniBox3">
            <div className="front">
                <div className="content">
                  <p>
                    Arzona <br /> <span>Holding Tokens</span>
                  </p>
                </div>
            </div>
            
            <div className="back">
                <div className="content">
                  <p>
                  Proof of Staking (PoS) is a consensus mechanism that secures the blockchain by selecting validators based on the number of tokens they hold and are willing to "stake" as collateral. Validators are chosen to create new blocks and confirm transactions, earning rewards in the process.
                  </p>
                </div>
            </div>
        </div>

        <div className="box miniBox4">
          
            <div className="front">
                <div className="content">
                  <p>
                    Arzona <br /> <span> Token Burning</span>
                  </p>
                </div>
            </div>
            
            <div className="back">
                <div className="content">
                  <p>
                  Proof of Burning (PoB) is a mechanism used to increase the scarcity of tokens within a blockchain network by permanently removing tokens from circulation. This process can help to increase the value of the remaining tokens and demonstrate a commitment to long-term value.
                  </p>
                </div>
            </div>

        </div>

      </div>
    </div>
  );
};

export default AlgorithSection;
