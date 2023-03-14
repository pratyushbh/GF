import React, { useContext } from 'react'
import Card from '../../components/card/Card'
import { motion } from "framer-motion"
import './SP.css'
import img from '../../assets/img.jpg'
import { NFTData } from '../../context/Items/ItemContext'

const SP = () => {
    const {nftdata}=useContext(NFTData);
    console.log(nftdata[0])
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
    const data={
        All:[
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"}
        ],
        Music:[
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"}
        ],
        DigitalAssets:[
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"}
        ],
        Novels:[
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"}
        ],
        Films:[
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"}
        ],
        DigitalArt:[
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"}
        ],
    }
  return (
    <div className="SP">
        <div className='sp_heading'>
            <h1><span className='sp_h1'>Discover in</span><br/>
            <motion.div transition={{delay:0.4}} initial={{ opacity: 0,translateX:-20 }} whileInView={{ opacity: 1,translateX:0 }} viewport={{once:true}}>
                <span className='sp_h2'>PARADISE</span>
            </motion.div>
            </h1>
        </div>
        <div className='sp_content'>
            <ul className='sp_list'>
                <li className='sp_listItem'>All</li>
                <li className='sp_listItem'>Music</li>
                <li className='sp_listItem'>Digital Art</li>
                <li className='sp_listItem'>Novels</li>
                <li className='sp_listItem'>Films</li>
                <li className='sp_listItem'>Digital Assests</li>
            </ul>
            <div className='sp_cards'>
                {data.All.map((item)=>{
                    return(
                       <Card img={img} name={item.name} price={item.price} author={item.author}/>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default SP