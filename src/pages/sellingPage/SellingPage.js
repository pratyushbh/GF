import React,{useState} from "react";
import {create} from 'ipfs-http-client'
import {Buffer} from 'buffer'
import "./SellingPage.css";
import axios from 'axios'


const projectId='2N0rfksx1fJkDBXVZgzdzix5IYX'
const projectSecret="01ba6f1cf1a2a01d0fce17636284e896"
const auth="Basic "+ Buffer.from(projectId+":"+projectSecret).toString('base64')

const client= create({
  host:'ipfs.infura.io',
  port:5001,
  protocol:'https',
  headers:{
    authorization:auth,
  },
})

export default function SellingPage() {
  const [fileUrl,setFileUrl]=useState(``);
  const [hash,setHash]=useState(``);
  const [img,setImg]=useState('');
  const [link,setLink]=useState('');
  const [nftname,setNftname]=useState('');
  const [desc,setDesc]=useState('');
  async function onChange(e){
    const file=e.target.files[0];
    try{
      const added= await client.add(file);
      const url=`https:/infura-ipfs.io/ipfs/${added.path}`
      setFileUrl(url)
      setHash(added.path)
     const result= await client.get(added.path, function (err, files) {
        console.log("get started")
        console.log(err)
        files.forEach((file) => {
          console.log(file.path)
          console.log(file.content.toString('utf8'))
        })
        
      })
      console.log(url,"\n",hash)
    }catch(e){
      console.log(e.message);
    }
  }
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
      axios.post("https://grizzly-backend.onrender.com/send",Bdata)
      .then(res=>{console.log(res)})
      .catch(err=>{console.log(err.message)})
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
        <h1>IPFS Example</h1>
      <input
        type="file"
        onChange={onChange}
      />
      {
        fileUrl && (
          <div>
            <a href={fileUrl} target="_blank">{fileUrl}</a>
          </div>
        )
      }
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
