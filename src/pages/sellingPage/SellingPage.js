import React from "react";
import "./SellingPage.css";
import upload from "../../assets/upload.png";

export default function SellingPage() {
  return (
    <>
      <h1 className="sp--title">Start Selling Now</h1>
      <div className="dabba">
        <p>Upload Files Here</p>
        <img src={upload} />
      </div>
      <form className="nft--form">
        <div>
          <label>Enter NFT Title</label>
          <input type="text"></input>
        </div>
        <div className="ehh">
          <label>Enter NFT Description</label>
          <textarea placeholder="A collection of 555 bored apes"></textarea>
        </div>
        <button className="submit-btn">Submit</button>
      </form>
    </>
  );
}
