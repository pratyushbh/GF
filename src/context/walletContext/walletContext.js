import {createContext,useState} from "react";

export const WalletContext=createContext({
    wallet:null,
    setWallet:()=>null
})

export const WalletProvider=({children})=>{
    const [wallet,setWallet]=useState(null);
    const value = {wallet,setWallet};
    return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
}