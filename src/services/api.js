const URL_TOKEN = 'https://opentdb.com/api_token.php?command=request';

export const getToken = async () => {
  const response = await fetch(URL_TOKEN);
  const data = response.json();
  return data;
};

const URL_QUESTIONS = 'https://opentdb.com/api.php?amount=5&token=';

export const getQuestions = async (token) => {
  const response = await fetch(`${URL_QUESTIONS}${token}`);
  const { results } = await response.json();
  return results;
};
