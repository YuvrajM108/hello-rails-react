const GET_GREETING = 'greeting/message/GET_GREETING';

const initialState = {
  message: '',
}

export const getGreeting = () => async (dispatch) => {
  const messages = await fetch('/api/v1/greetings',{
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const messageArr = [];
  const randomMsg = '';
  if(messages) {
    messages.forEach((obj) => {
      const messageText = obj.message;
      messageArr.push(messageText);
    });
    let idx = Math.floor(Math.random() * messageArr.length);
    randomMsg = messageArr[idx];
  }
  dispatch({
    type: GET_GREETING,
    randomMsg,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETING:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
