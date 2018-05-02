import { fromJS , toJS } from 'immutable';

let initialState = {
	settings : {}
};

const layoutReducer = (state = initialState, action) => {
	state = fromJS(state);
	switch(action.type){
		case 'SET_LAYOUT':
			return state
				.setIn(['settings'],action.value).toJS();
		break;
		default:
	  	return state.toJS();
	}
}

export default layoutReducer;
