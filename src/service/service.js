const consultExpense = async () => {

  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const cotation = await response.json();
  delete cotation.USDT;
  return cotation;
};
export default consultExpense;
