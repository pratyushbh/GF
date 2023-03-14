import React,{useState,useContext} from "react";
import icon1 from "../../assets/profilepic.png";
import icon2 from "../../assets/wallet.png";
import "./Navbar.css";
import { WalletContext } from "../../context/walletContext/walletContext";

const getProvider = async () => {
  if ("solana" in window) {
    await window.solana.connect(); // opens wallet to connect to

    const provider = window.solana;
    if (provider.isPhantom) {
      console.log("Is Phantom installed?  ", provider.isPhantom);
      return provider;
    }
  } else {
    document.write('Install https://www.phantom.app/');
  }
};


function Navbar() {
  const {wallet,setWallet}=useContext(WalletContext);
  const [isVisible,setIsVisible]=useState(true);
  const connectWallet=()=>{
    getProvider().then(provider=>{
      console.log('key',provider.publicKey.toString())
      setWallet(provider.publicKey.toString())
      console.log(wallet)
    })
    .catch(function(error){
      console.log(error);
    });
  }
  return (
    <div className="Navbar">
        <a href="./">
        <h1 className="logo">PARADISE</h1>
        </a>
        <div  className='elements'>
            <h3 className='item'>About</h3>
            <a href="./sp">
              <h3 className="item">Discover</h3>
            </a>
            <h3 className='item'>Sell</h3>
            {(wallet===null)?
            <img className='item' src={icon2} onClick={connectWallet}/>
            :<div className='walletActive' onClick={()=>{setIsVisible(!isVisible)}}>
            <div className='walletDisplay'>
                <img className='item' src={icon1}/>
                
            </div>
            {isVisible?<></>:<>
            <div className='walletDropdown'>
              <ul>
                <li onClick={()=>{setIsVisible(true);setWallet(null)}}>Disconnect</li>
                <li>Account</li>
              </ul>
            </div>
            </>}
            </div>
            }

        </div>
    </div>
  );
}

export default Navbar;
