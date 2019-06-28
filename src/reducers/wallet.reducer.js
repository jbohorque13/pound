import {
  LOADED_DATA_WALLET,
  CHANGE_DATA_WALLET
} from '../actions/wallet';
import { getRandom } from '../utils';

const INITIAL_STATE = {
  dataWallet: {},
  loading: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADED_DATA_WALLET:
      const amountBTC = getRandom(0.5, 1.5);
      const dataWallet = {
        amountBTC: amountBTC.toFixed(5)
      }
      return {
        ...state,
        dataWallet,
        loading: false,
      }
    case CHANGE_DATA_WALLET:
      const dataWalletNew = {
        amountBTC: action.payload.amountBTC.toFixed(5)
      }
      return {
        ...state,
        dataWallet: dataWalletNew,
      }
    default:
      return state;
  }
}
