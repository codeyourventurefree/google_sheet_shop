import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Image } from 'semantic-ui-react';

class Logo extends Component {
	constructor(props){
		super(props);
	}
	styleSetting(){
		let logoWrapperStyle = {
			display : 'flex',
			justifyContent : 'center',
			padding : '20px'
		};
		return {
			logoWrapper : logoWrapperStyle
		};
	}
	render(){
		const { layout } = this.props;
		const renderStyle = this.styleSetting();
		return (
			<div style={renderStyle.logoWrapper}>
				{(layout['logoImage']) ? 
					<Image
						src={layout['logoImage']}
						height={(layout['logoHeight']) ? layout['logoHeight'] : 'auto'}
						width={(layout['logoWidth']) ? layout['logoWidth'] : 'auto'}
					/> : 
					null
				}
			</div>
		)
	}
}

export default connect(null,null)(Logo);
