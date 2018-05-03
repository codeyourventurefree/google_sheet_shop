import { fromJS , toJS } from 'immutable';

let initialState = {
	cart : []
};

const productReducer = (state = initialState, action) => {
	state = fromJS(state);
	switch(action.type){
		case 'UPDATE_CART':
				return state
					.setIn(['cart'],action.value).toJS();
			break;
		case 'SET_PRODUCTS':
				return state
					.setIn(['list'],action.value).toJS();
			break;
		default:
	  	return state.toJS();
			break;
	}
}

export default productReducer;
