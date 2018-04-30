import { fromJS , toJS } from 'immutable';

let initialState = {
	logo : {},
	body : {},
	mainWrapper : {}
};

const layoutReducer = (state = initialState, action) => {
	state = fromJS(state);
	switch(action.type){
		default:
	  	return state.toJS();
	}
}

export default layoutReducer;
