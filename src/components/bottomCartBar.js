import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Segment , Button } from 'semantic-ui-react';

class BottomCartBar extends Component {
	constructor(props){
		super(props);
	}
	styleSetting(layout){
		let barStyle = {
			display : 'flex',
			justifyContent : 'center',
			padding : '20px',
			backgroundColor : 'white',
			width : '95%',
			margin : '10px'
		};
		Object.keys(layout).map((property)=>{
			if(layout[property] !== null && layout[property] !== undefined){
				let thisValue = layout[property];
				switch(property){
					case 'barBottomColor':
						barStyle.backgroundColor = thisValue;
					break;
					case 'barBottomHeight':
						barStyle.height = thisValue+'vh';
					break;
				}
			}
		});
		return {
			bar : barStyle
		};
	}
	render(){
		const { layout } = this.props;
		const renderStyle = this.styleSetting(layout);
		return(
			<Segment style={renderStyle.bar}>
			</Segment>
		)
	}
}

export default connect(null,null)(BottomCartBar);
