import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getLayout } from './layout/actions.js';
import { ReactTypeformEmbed } from 'react-typeform-embed';

const styles = {
	body : {
		display: 'flex',
		flex : 1,
		backgroundColor : 'red',
		margin : 0 ,
		height: '100vh'
	}
}

class Root extends Component{
	constructor(props){
		super(props);
	}		
	componentDidMount(){
		const { getLayout } = this.props;
		getLayout();
	}
	render(){
		return (
			<div style={styles.body}>
				<p>hi</p>
				<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeHo1JYtz2geQh0xE_qKC4s7DUuNsmBcqvB0gZA31tnANTfQw/viewform?embedded=true" width="700" height="520" frameBorder="0" marginHeight="0" marginWidth="0">Loading...</iframe>
			</div>
		)
	}
}

function mapStateToProps(state){
	return { 
	}
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ 
		getLayout
	}, dispatch)
};

export default connect(mapStateToProps,mapDispatchToProps)(Root);

