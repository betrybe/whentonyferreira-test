// Coloque aqui suas actions
export const LOGIN = 'LOGIN';

export function getEmailLogin(email) {
  return {
    type: LOGIN,
    payload: email,
  };
}
