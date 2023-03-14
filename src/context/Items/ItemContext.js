import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const NFTData=createContext()

export const NFTDprovider=({children})=>{
    const [nftdata,setNftdata]=useState([])
    useEffect(()=>{
        axios.get("https://grizzly-backend.onrender.com/all-nft")
        .then(response=>{
          setNftdata(response.data);
        })
      },[])
    const value={nftdata,setNftdata};
    return <NFTData.Provider value={value}>{children}</NFTData.Provider>
}