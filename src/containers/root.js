import React, { Component } from 'react';

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
	render(){
		return (
			<div style={styles.body}>
				<p>hi</p>
			</div>
		)
	}
}


export default Root;
