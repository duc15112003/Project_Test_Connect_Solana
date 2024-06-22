import React, { useCallback } from 'react';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const YourComponent = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  const onClick = useCallback(async () => {
    if (!publicKey) {
      alert('Wallet not connected!');
      return;
    }
    // Add your transaction logic here
    console.log("Wallet is connected!", publicKey.toString());
  }, [publicKey, sendTransaction, connection]);

  return (
    <div>
      <WalletMultiButton />
      <button onClick={onClick}>Do Something</button>
    </div>
  );
};

export default YourComponent;
