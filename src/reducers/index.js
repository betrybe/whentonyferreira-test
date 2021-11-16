import { combineReducers } from 'redux';
import user from './user';
import Wallet from './wallet';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
export default combineReducers({
  user,
  Wallet,
});
