import { fromJS , toJS } from 'immutable';

let initialState = {
	products : []
};

const productReducer = (state = initialState, action) => {
	state = fromJS(state);
	switch(action.type){
		default:
	  	return state.toJS();
	}
}

export default productReducer;
