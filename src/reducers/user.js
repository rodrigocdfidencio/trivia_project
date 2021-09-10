import { ADD_TOKEN, GET_PLAYER_LOGIN, GET_RANKING, IS_OVER,
  PASS_TIME, TIME_RESET } from '../actions/index';

const initialState = {
  player: {},
  ranking: [],
  token: '',
  over: false,
  score: 0,
  time: 30,
  assertions: 0,
};

const user = (state = initialState, action) => {
  switch (action.type) {
  case ADD_TOKEN:
    return { ...state, token: action.payload };
  case IS_OVER:
    return { ...state, over: action.payload };
  case GET_PLAYER_LOGIN:
    return { ...state, player: { ...state.player, ...action.payload } };
  case GET_RANKING:
    return { ...state, ranking: [...state.ranking, action.payload] };
  case PASS_TIME:
    return {
      ...state, time: state.time > 0 ? state.time - 1 : 0,
    };
  case TIME_RESET:
    return {
      ...state, time: 30, over: false,
    };
  default:
    return state;
  }
};

export default user;
