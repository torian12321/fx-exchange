import React from "react";

const Context = React.createContext({});

const useWalletState: any = () => {
  const context = React.useContext(Context);
  if (!context) {
    throw new Error(
      `Components cannot be rendered outside <useWalletState>`
    );
  }

  return context;
};

export { Context, useWalletState };
