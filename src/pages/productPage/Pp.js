import React,{useContext, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Card from '../../components/card/Card';
import Img from '../../components/ImgSlider/Img';
import './Pp.css'
import img from '../../assets/img.jpg'
import { Link } from 'react-router-dom';
import { NFTData } from '../../context/Items/ItemContext';

const Pp = () => {
  let {name,author,price,id}= useParams();
  const {nftdata}=useContext(NFTData);
  useEffect(()=>{
    console.log(nftdata[0])
  },
  [])
  let data=[
    {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
    {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
    {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"},
    {img:{img}, name:"Learn how to generate art with AI", price:"2.34", author:"Creator name"} ]
  console.log(price)
  return (
    <div className="Product">
      <h1 className='P_heading'>PARADISE</h1>
      <div className='P_table'>
        <div className='P_Lside'>
          <Img/>
          <div className='P_Lh1'>
          <h1>{name}</h1>
          <div className='P_category'><p>Category</p></div>
          </div>
          <h2>{author}</h2>
        </div>
        <div className='P_Rside'>
          <h2>Product Description</h2>
          <p>Voluptate qui sint veniam fugiat nisi nostrud sint ad Lorem enim deserunt Lorem esse. Cupidatat pariatur fugiat cillum dolore ullamco est quis incididunt aute mollit quis amet et occaecat. Deserunt officia consectetur qui fugiat. Sint in sit occaecat deserunt cupidatat id officia ut id.</p>
          <div className='P_rating'><span>Rating</span><span>✩✩✩✩✩</span></div>
          <div className='P_price'><h3>Current Price:</h3><h3>{price} Sol</h3></div>
          <div className='P_buttons'>
            <button className='Button1'>Add To Cart</button>
            <button className='Button2'>Buy Now</button>
          </div>
        </div>
      </div>
      <div className='P_relatedP'>
        <h1>Related Product</h1>
        <div className='P_cards'>
        {data.map((item)=>{
                    return(
                      <Card img={img} name={item.name} price={item.price} author={item.author}/>
                    )
                })}
        </div>
      </div>
    </div>
  )
}

export default Pp