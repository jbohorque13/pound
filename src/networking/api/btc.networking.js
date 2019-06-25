import axios from 'axios';

export const getPricesDiferentCurrencies = async () => {
  const prices = await axios.get('https://ripio.com/api/v1/rates/');
  return prices.data;
}
