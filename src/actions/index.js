// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const SUBMIT_EXPENSE = 'SUBMIT_EXPENSE';
export const UPDATE_EXPENSE = 'UPDATE_EXPENSE';
export const SUBMIT_TABLE = 'SUBMIT_TABLE';
export const UPDATE_TABLE = 'UPDATE_TABLE';

export function getEmailLogin(email) {
  return {
    type: LOGIN,
    payload: email,
  };
}

export const submitExpense = (expense) => ({
  type: SUBMIT_EXPENSE,
  expense,
});

export const updateExpense = (expense) => ({
  type: UPDATE_EXPENSE,
  expense,
});

export const submitTable = (table) => ({
  type: SUBMIT_TABLE,
  table,
});

export const updateTable = (table) => ({
  type: UPDATE_TABLE,
  table,
});

export default submitExpense;
