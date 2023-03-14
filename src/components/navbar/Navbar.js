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
    <div className='Navbar'>
      <Link to='/'>
        <h1 className='logo'>PARADISE</h1>
      </Link>
      <div className='elements'>
        <h3 className='item'>About</h3>
        <Link to='/sp'>
          <h3 className='item'>Discover</h3>
        </Link>
        <h3 className='item'>Sell</h3>
        {wallet === "" ? (
          <img className='item' src={icon2} onClick={connectWallet} />
        ) : (
          <div
            className='walletActive'
            onClick={() => {
              setIsVisible(!isVisible);
            }}
          >
            <div className='walletDisplay'>
              <img className='item' src={icon1} />
              <h3>{wallet.slice(0, 10) + "..."}</h3>
            </div>
            {console.log("logged in")}
            {isVisible ? (
              <></>
            ) : (
              <>
                <div className='walletDropdown'>
                  <ul>
                    <li
                      onClick={() => {
                        setIsVisible(true);
                        setWallet(null);
                      }}
                    >
                      Disconnect
                    </li>
                    <li>Account</li>
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
