import {
  LOADING_PRICES,
  LOADED_PRICES,
  CHANGE_PRESED_CURRENCY
} from '../actions/btc';

const initialState = {
  loading: true,
  dataBTC: {},
  parCurrencyOnFocus: {},
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
      let parCurrencyOnFocus = null;

      const dataBTC = Object.keys(action.payload.dataBTC.names).map(row => {
        if (action.payload.dataBTC.rates[`${row}_BUY`] && action.payload.dataBTC.rates[`${row}_SELL`]) {
          paresBTC[row]['BUY'] = action.payload.dataBTC.rates[`${row}_BUY`];
          paresBTC[row]['SELL'] = action.payload.dataBTC.rates[`${row}_SELL`];
          paresBTC[row]['currency'] = row;
          if (row === 'ARS') {
            parCurrencyOnFocus = paresBTC[row];
          }
          return paresBTC[row];
        }
      }).filter(value => {
        if (value) {
          return value;
        }
      });
      console.log('áscdscdscsd ', parCurrencyOnFocus);
      return {
        ...state,
        dataBTC,
        parCurrencyOnFocus,
        loading: false,
        error: null
      }
    case CHANGE_PRESED_CURRENCY:
      console.log(action.payload.parCurrencyOnFocus);
      return {
        ...state,
        parCurrencyOnFocus: action.payload.parCurrencyOnFocus
      };
    default:
      return state;
  }
}
