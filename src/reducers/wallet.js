// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SUBMIT_EXPENSE } from '../actions';

const INITIAL_STATE = {
  editor: false,
  idToEdit: 0,
  currencies: [],
  expenses: [],
};

// Esse reducer será responsável por tratar as informações da pessoa usuária
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
  case SUBMIT_EXPENSE:
    console.log(action);
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
}
