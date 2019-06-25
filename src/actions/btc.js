export const LOADING_PRICES = 'LOADING_PRICES';
export const LOADED_PRICES = 'LOADED_PRICES';
import { getPricesDiferentCurrencies } from '../networking/api/btc.networking';

export const loadingPrices = () => ({
  type: LOADING_PRICES
})

export const loadedDataBTC = ({ dataBTC }) => ({
  type: LOADED_PRICES,
  payload: {
    dataBTC
  }
});

export const loadedPrices = () => async (dispatch) => {
  dispatch(loadingPrices());
  try {
    const dataBTC = await getPricesDiferentCurrencies();
    dispatch(loadedDataBTC({ dataBTC }));
  } catch (e) {
    console.log(e);
  }

}
