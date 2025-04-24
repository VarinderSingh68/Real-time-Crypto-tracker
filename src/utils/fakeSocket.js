export const simulateCryptoUpdates = (dispatch, updateCrypto) => {
    setInterval(() => {
      const priceChange = () => (Math.random() * 1000).toFixed(2);
      const percentChange = () => (Math.random() * 5 - 2.5).toFixed(2); // -2.5% to +2.5%
  
      const randomAsset = ['BTC', 'ETH', 'USDT', 'XRP', 'BNB'][Math.floor(Math.random() * 5)];
      dispatch(updateCrypto({
        symbol: randomAsset,
        price: parseFloat(priceChange()),
        change1h: parseFloat(percentChange()),
        change24h: parseFloat(percentChange()),
        change7d: parseFloat(percentChange()),
        volume24h: Math.floor(Math.random() * 10000000000),
      }));
    }, 1500);
  };
  
  