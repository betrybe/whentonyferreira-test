import { LOGIN } from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária
export default function (state = '', action) {
  switch (action.type) {
  case LOGIN:
    console.log(action.payload);
    return action.payload;
  default:
    return state;
  }
}
