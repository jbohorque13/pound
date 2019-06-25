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
      return {
        ...state,
        dataBTC: action.payload.dataBTC,
        loading: false,
        error: null
      }
    default:
      return state;
  }
}
