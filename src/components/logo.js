import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Image , Transition } from 'semantic-ui-react';

class Logo extends Component {
	constructor(props){
		super(props);
		this.state = { status : false };
	}
	componentDidMount(){
		setTimeout(()=>this.setState({ status : true }),500);
	}
	styleSetting(){
		let logoWrapperStyle = {
			display : 'flex',
			alignItems : 'center',
			justifyContent : 'center',
			padding : '20px'
		};
		return {
			logoWrapper : logoWrapperStyle
		};
	}
	render(){
		const { layout } = this.props;
		const { status } = this.state;
		const renderStyle = this.styleSetting();
		return (
			<div style={renderStyle.logoWrapper}>
				{(layout['logoImage']) ? 
					<Transition visible={status} animation={'fade'} duration={2000}>
						<Image
							src={layout['logoImage']}
							height={(layout['logoHeight']) ? layout['logoHeight'] : 'auto'}
							width={(layout['logoWidth']) ? layout['logoWidth'] : 'auto'}
						/>
					</Transition>
					: null
				}
			</div>
		)
	}
}

export default connect(null,null)(Logo);
