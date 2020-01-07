import React from "react";

const Context = React.createContext({});

const useCurrenciesState: any = () => {
  const context = React.useContext(Context);
  if (!context) {
    throw new Error(
      `Components cannot be rendered outside <CurrenciesProvider>`
    );
  }

  return context;
};

export { Context, useCurrenciesState };
