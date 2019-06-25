export const LOADING_PRICES = 'LOADING_PRICES';
export const LOADED_PRICES = 'LOADED_PRICES';
export const CHANGE_PRESED_CURRENCY = 'CHANGE_PRESED_CURRENCY';

import { getPricesDiferentCurrencies } from '../networking/api/btc.networking';

export const loadingPrices = () => ({
  type: LOADING_PRICES
})

export const changeCurrencyOnFocus = ({ parCurrencyOnFocus }) => ({
  type: CHANGE_PRESED_CURRENCY,
  payload: {
    parCurrencyOnFocus
  }
});


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
