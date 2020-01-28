import React from 'react';
import { render } from '@testing-library/react';
import { create } from "react-test-renderer";
import '@testing-library/jest-dom/extend-expect';
import { WalletProvider } from 'apiContext';
import { WidgetWallet } from '../WidgetWallet';
import { Pocket } from '../components/Pocket';


describe("Widget: Wallet", () => {
  it(`should render no items by default`, () => {
    // Given && When
    const wallet = create(
      <WidgetWallet />
    );

    // Then
    expect(wallet.toJSON()).toMatchSnapshot();
    expect(wallet.root.findAllByType(Pocket).length).toEqual(0);
  });

  it(`should render with 3 currencies from the 'API'`, () => {
    // Given && When
    const wallet = create(
      <WalletProvider>
        <WidgetWallet />
      </WalletProvider>
    );

    // Then
    expect(wallet.toJSON()).toMatchSnapshot();
    expect(wallet.root.findAllByType(Pocket).length).toEqual(3);
  });
});


// export const WidgetWalletStoryBook = () => (
//   <WalletProvider>
//     <WidgetWallet />
//   </WalletProvider>
// );
