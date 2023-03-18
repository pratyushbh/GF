import React, { useState, useContext } from "react";
import icon1 from "../../assets/profilepic.png";
import { Link } from "react-router-dom";
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
    document.write("Install https://www.phantom.app/");
  }
};

function Navbar() {
  const data={
    All:[
        {name:"Learn how to generate art with AI"},
        { name:"Learn how to generate art with AI"},
        { name:"Learn how to generate art with AI"},
        {name:"Learn how to generate art with AI"},
        {name:"Learn how to generate art with AI"},
        { name:"Learn how to generate art with AI"},
        { name:"Learn how to generate art with AI"},
        { name:"Learn how to generate art with AI"}
    ] }

  const [search,setSearch]=useState("")
  const { wallet, setWallet } = useContext(WalletContext);
  const [isVisible, setIsVisible] = useState(true);
  const connectWallet = () => {
    getProvider()
      .then((provider) => {
        console.log("key", provider.publicKey.toString());
        setWallet(provider.publicKey.toString());
        console.log(wallet);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="Navbar">
      <Link to="/">
        <h1 className="logo">PARADISE</h1>
      </Link>
      <input type="text" onChange={(e)=>{setSearch(e.target.value)}} className="Search" placeholder="Search the product by name"/>
      {((search==="") ? (()=>{
        return (
          <></>
        ) 
      }): (()=>{
        return (
          <div className="SearchList">
            <ul>
              {data.All.filter(value=>value.name.includes(search)).map(item=>{
                <li>{item}</li>
              })}
            </ul>
          </div>
        )
      } 
      ))}
      <div className="elements">
        <Link to="/">
          <h3 className="item">About</h3>
        </Link>
        <Link to="/sp">
          <h3 className="item">Discover</h3>
        </Link>
        <Link to="/SellingPage">
          <h3 className="item">Sell</h3>
        </Link>
        {wallet === "" ? (
          <img className="item" src={icon2} onClick={connectWallet} />
        ) : (
          <div
            className="walletActive"
            onClick={() => {
              setIsVisible(!isVisible);
            }}
          >
            <div className="walletDisplay">
              <img className="item2" src={icon1} />
              <h3>{wallet.slice(0, 10) + "..."}</h3>
            </div>
            {console.log("logged in")}
            {isVisible ? (
              <></>
            ) : (
              <>
                <div className="walletDropdown">
                  <ul>
                    <li
                      onClick={() => {
                        setIsVisible(true);
                        setWallet('');
                      }}
                    >
                      Disconnect
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
