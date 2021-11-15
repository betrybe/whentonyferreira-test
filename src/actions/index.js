// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const SUBMIT_EXPENSE = 'SUBMIT_EXPENSE';
export const SUBMIT_TABLE = 'SUBMIT_TABLE';

export function getEmailLogin(email) {
  return {
    type: LOGIN,
    payload: email,
  };
}

export function submitExpense(expense) {
  return {
    type: SUBMIT_EXPENSE,
    payload: expense,
  };
}

export const submitTable = (currencies) => ({
  type: SUBMIT_TABLE,
  payload: currencies,
});
