import { fromJS , toJS } from 'immutable';

let initialState = {
	cart : []
};

const productReducer = (state = initialState, action) => {
	state = fromJS(state);
	switch(action.type){
		case 'SET_PRODUCTS':
				return state
					.setIn(['list'],action.value).toJS();
			break;
		default:
	  	return state.toJS();
	}
}

export default productReducer;
