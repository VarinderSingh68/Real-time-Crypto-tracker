import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateCrypto } from './features/crypto/cryptoSlice';
import { simulateCryptoUpdates } from './utils/fakeSocket';
import CryptoTable from './features/crypto/CryptoTable';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    simulateCryptoUpdates(dispatch, updateCrypto);
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Real-Time Crypto Tracker</h1>
      <CryptoTable />
    </div>
  );
}

export default App;
