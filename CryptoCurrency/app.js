const fetchCryptoPrice = async (cryptoSymbol) => {
    const url = `https://coinranking1.p.rapidapi.com/coin/${cryptoSymbol}/price?referenceCurrencyUuid=yhjMzLPhuIDl`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '244a5b6763mshffb2c46dbb4887bp1b6474jsnf5e77f512a5f',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json();
  
      if (result.data && result.data.coin && result.data.coin.price) {
        return result.data.coin.price;
      } else {
        throw new Error('Invalid response data structure');
      }
    } catch (error) {
      console.error(`Error fetching ${cryptoSymbol} price:`, error.message);
      return null;
    }
  };
  
  const updateCryptoPrices = async () => {
    try {
      const bitcoinPrice = await fetchCryptoPrice('bitcoin');
      const ethereumPrice = await fetchCryptoPrice('ethereum');
      const dogecoinPrice = await fetchCryptoPrice('dogecoin');
  
      // Update HTML with fetched prices
      document.querySelector('.coin:nth-child(1) p').textContent = `$${bitcoinPrice || 'N/A'}`;
      document.querySelector('.coin:nth-child(2) p').textContent = `$${ethereumPrice || 'N/A'}`;
      document.querySelector('.coin:nth-child(3) p').textContent = `$${dogecoinPrice || 'N/A'}`;
    } catch (error) {
      console.error('Error updating crypto prices:', error.message);
    }
  };
  
  // Call the function to update prices on page load
  updateCryptoPrices();
  
  // Optionally, you can set up a periodic refresh using setInterval
  // setInterval(updateCryptoPrices, 60000); // Refresh every 60 seconds
  