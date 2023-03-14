import React from 'react'
import "./card.css"
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';

const Card = (props) => {
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
          }
        }
      };
      
      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      };
    const {img,name,price,author}=props;
  return (
    <motion.div transition={{delay:0.4}} initial={{ opacity: 0,translateY:-20 }} className="Card" whileInView={{ opacity: 1,translateY:0 }} >
    <a href="./product/abc/123/me">
    <div>
         <div className='pic'>
            <img src={img}/>
         </div>
         <div className='card_header'>
            <h1>{name}</h1>
            <button className='card_button'>Book</button>
         </div>
         <div className='card_footer'>
            <h3>{author}</h3>
            <h3><span className='card_priceH'>Current Bid</span><br/><span>{price}</span> Sol</h3>
         </div>
    </div>
    </a>
    </motion.div>
  )
}

export default Card