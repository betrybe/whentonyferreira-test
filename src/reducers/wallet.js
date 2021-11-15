// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SUBMIT_EXPENSE,
  SUBMIT_TABLE,
  UPDATE_TABLE,
  UPDATE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  editor: false,
  idToEdit: 0,
  table: [],
  expenses: 0,
};

// Esse reducer será responsável por tratar as informações da pessoa usuária
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
  case SUBMIT_EXPENSE:
    return {
      ...state,
      expenses: Number(action.expense + state.expenses),
    };
  case UPDATE_EXPENSE:
    console.log(state.expenses - action.expense)
    return {
      ...state,
      expenses: Number(state.expenses - action.expense)
    };
  case SUBMIT_TABLE:
    console.log(action)
    return {
      ...state,
      table: [...state.table, action.table],
    };
  case UPDATE_TABLE:
    console.log(action)
    return {
      ...state,
      table: action.table,
      editor: false,
    };
  default:
    return state;
  }
}
