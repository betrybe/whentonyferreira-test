// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const SUBMIT_EXPENSE = 'SUBMIT_EXPENSE';

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
