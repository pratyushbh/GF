import React, { useContext,useState,useEffect } from 'react'
import Card from '../../components/card/Card'
import { motion } from "framer-motion"
import './SP.css'
import img from '../../assets/img.jpg'
import { NFTData } from '../../context/Items/ItemContext'

const SP = () => {
    const {nftdata}=useContext(NFTData);
    const [section,setSection]=useState("All");
    useEffect(()=>{
        const sec=data[section];
    },[section])
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
        Code:[
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"}
        ],
        Tweets:[
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
            {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"}
        ]
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
                <li className={((section==="All")?"on_":"")+'sp_listItem'}><button onClick={()=>setSection("All")}>All</button></li>
                <li className={((section==="Music")?"on_":"")+'sp_listItem'}><button onClick={()=>setSection("Music")}>Music</button></li>
                <li className={((section==="DigitalArt")?"on_":"")+'sp_listItem'}><button onClick={()=>setSection("DigitalArt")}>Digital Art</button></li>
                <li className={((section==="Novels")?"on_":"")+'sp_listItem'}><button onClick={()=>setSection("Novels")}>Novels</button></li>
                <li className={((section==="Films")?"on_":"")+'sp_listItem'}><button onClick={()=>setSection("Films")}>Films</button></li>
                <li className={((section==="DigitalAssets")?"on_":"")+'sp_listItem'}><button onClick={()=>setSection("DigitalAssets")}>Digital Assests</button></li>
                <li className={((section==="Tweets")?"on_":"")+'sp_listItem'}><button onClick={()=>setSection("Tweets")}>Qoutes</button></li>
                <li className={((section==="Code")?"on_":"")+'sp_listItem'}><button onClick={()=>setSection("Code")}>Code</button></li>
            </ul>
            <div className='sp_cards'>
                {data[section].map((item)=>{
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