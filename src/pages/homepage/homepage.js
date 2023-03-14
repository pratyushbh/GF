import frame1 from "../../assets/Frame5.png";
import frame2 from "../../assets/Frame4.png";
import group from "../../assets/Group5.png";
import React, { useEffect } from "react";
import Rellax from "rellax";
import { motion } from "framer-motion"

function HomePage() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  useEffect(() => {
    new Rellax(".frame1", {
      speed: 7,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
    new Rellax(".frame2", {
      speed: 3,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
  }, []);
  return (
    <div className="App">
      <div className="Hero-section">
        <div className="text">
          <span className="text-1">Introducing</span>
          <motion.div
            transition={{ delay: 0.4 }}
            initial={{ opacity: 0, translateX: -20 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-2">PARADISE</span>
          </motion.div>
          <span className="text-3">A new way of digital assets</span>
        </div>
        <div className="frames">
          <img src={frame1} className="frame1" />
          <img src={frame2} className="frame2" />
        </div>
      </div>
      <div className="sections">
        <motion.div
          transition={{ delay: 0.2 }}
          initial={{ opacity: 0, translateY: -20 }}
          whileInView={{ opacity: 1, translateY: 0 }}
        >
          <div className="sec1">
            <motion.div
              transition={{ delay: 0.4 }}
              initial={{ opacity: 0, translateY: -20 }}
              whileInView={{ opacity: 1, translateY: 0 }}
            >
              <img src={group} className="img" />
            </motion.div>
            <div className="divider"></div>
            <div className="desc">
              <h1>
                <span className="text-1">Why</span>
                <span className="text-2">PARADISE</span>
              </h1>
              <p>
                PARADISE is a decentralized marketplace that empowers creators
                to sell their digital products as NFTs on the blockchain. Our
                platform is built on the Solana network and leverages the power
                of smart contracts to provide a secure and transparent
                marketplace for creators and buyers. With PARADISE, creators can
                monetize their digital content and retain full ownership, while
                buyers can enjoy a seamless and secure purchasing experience.
                Join our platform today and be part of the future of digital
                commerce.
              </p>
            </div>
          </div>
        </motion.div>
        <div className="newSec">
          <p className="text1">Start Selling At</p>
          <p className="text2">PARADISE</p>
        </div>
        <div>
          <button className="lesgo">LFG🚀</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
