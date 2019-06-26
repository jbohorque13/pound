import { combineReducers } from 'redux'
import btc from './btc.reducer';
import wallet from './wallet.reducer';
import operations from './operations.reducer';

export default combineReducers({
  btc,
  wallet,
  operations
});
