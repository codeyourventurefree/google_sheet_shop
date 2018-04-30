import { createStore, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import { createLogger  } from 'redux-logger';
import rootReducer from '../containers/rootReducer';

//Configure Middleware : Default with thunk to handle async actions
let middlewares = [thunk];

// Configure logger as middleware in Dev Mode
const loggerMiddleware = createLogger({
	 predicate: () => process.env.REACT_APP_ENV !== 'production'
});

middlewares.push(loggerMiddleware);

const createStoreWithMiddleware = applyMiddleware(...middlewares) (createStore);

const configureStore = (initState)=>createStoreWithMiddleware(rootReducer, initState);

export default configureStore;
