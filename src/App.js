import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './config/configureStore.js';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';
import Root from './containers/root';

const store = configureStore({});

class App extends Component {
  render() {
    return (
			<Provider store={store}>
				<Router>
					<Switch>
						<Route exact path="/" component={Root}/>
					</Switch>
				</Router>
			</Provider>
    );
  }
}

export default App;
