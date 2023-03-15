import React,{useState} from "react";
import "./SellingPage.css";
import axios from 'axios'

export default function SellingPage() {
  const [img,setImg]=useState('');
  const [link,setLink]=useState('');
  const [nftname,setNftname]=useState('');
  const [desc,setDesc]=useState('');
  function upload(event){
    console.log(event.target.files)
    setImg(event.target.files[0]);
    console.log(link);
    }
  function handleName(e){
    setNftname(e.target.value);
  }
  function handleDesc(e){
    setDesc(e.target.value);
  }
  const Submit=()=>{
    console.log(img);
    const data=new FormData();
    data.append("file",img)
    data.append("upload_preset","Grizzly")
    data.append("cloud_name","dcshl7uuh")
    fetch("https://api.cloudinary.com/v1_1/dcshl7uuh/image/upload",{
      method:"post",
      body:data
    })
    .then(res=>{return res.json()})
    .then(async data=>{
      await console.log(data.url);
      const Bdata = await {name:nftname,desc:desc,imgLink:data.url};
      console.log(Bdata);
    })
    .catch(err=>{console.log(err.message)})
  }
  return (
    <>
    <div className="sp--container">
      <h1 className="sp--title">Start Selling Now<br/><h1 className="sp--title-1">PARADISE</h1></h1>
      <div className="selling_area">
      <h3>Upload Files Here</h3>
      <div className="dabba">
        <input type="file" id="pic" onChange={upload} accept=" image/jpeg, image/png"/>
      </div>
      <form className="nft--form">
        <div>
          <h3>Enter NFT Title</h3>
          <br/>
          <input type="text" onChange={handleName} ></input>
        </div>
        <div className="ehh">
          <h3>Enter NFT Description</h3>
          <textarea onChange={handleDesc} placeholder="A collection of 555 bored apes"></textarea>
        </div>
      </form>
      <button onClick={Submit} className="submit-btn">Submit</button>
      </div>
      </div>
    </>
  );
}
