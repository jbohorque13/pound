import { combineReducers } from 'redux'
import btc from './btc.reducer';
import wallet from './wallet.reducer';

export default combineReducers({
  btc,
  wallet
});
