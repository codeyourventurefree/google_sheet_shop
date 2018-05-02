import { combineReducers } from 'redux';
import productReducer from './product/reducer.js';
import layoutReducer from './layout/reducer.js';

const rootReducer = combineReducers({
	products : productReducer,
	layout : layoutReducer
});

export default rootReducer;

