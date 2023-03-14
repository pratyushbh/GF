import { createContext, useState } from "react";

export const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [wallet, setWallet] = useState("");
  const value = { wallet, setWallet };
  return (
    <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
  );
};
