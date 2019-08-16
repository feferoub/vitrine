import {combineReducers} from 'redux';
import UserReducer from './ReducerUsers.js';

const allReducers = combineReducers({
	user: UserReducer
});

export default allReducers;