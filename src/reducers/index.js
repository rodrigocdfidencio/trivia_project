import { combineReducers } from 'redux';
import user from './user';
import reducerGravatar from './gravatar';

const rootReducer = combineReducers({ user, reducerGravatar });

export default rootReducer;
