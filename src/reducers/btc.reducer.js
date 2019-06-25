import {
  LOADING_PRICES,
  LOADED_PRICES
} from '../actions/btc';

const initialState = {
  loading: true,
  dataBTC: {},
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_PRICES:
      return {
        ...state,
        loading: true
      }
    case LOADED_PRICES:
      let paresBTC = action.payload.dataBTC.names;
      const dataBTC = Object.keys(action.payload.dataBTC.names).map(row => {
        if (action.payload.dataBTC.rates[`${row}_BUY`] && action.payload.dataBTC.rates[`${row}_SELL`]) {
          paresBTC[row][`${row}_BUY`] = action.payload.dataBTC.rates[`${row}_BUY`];
          paresBTC[row][`${row}_SELL`] = action.payload.dataBTC.rates[`${row}_SELL`];
          paresBTC[row]['currency'] = row;
          return paresBTC[row];
        }
      }).filter(value => {
        if (value) {
          return value;
        }
      });
      return {
        ...state,
        dataBTC,
        loading: false,
        error: null
      }
    default:
      return state;
  }
}
