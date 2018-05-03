import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getLayout } from './layout/actions.js';
import { ReactTypeformEmbed } from 'react-typeform-embed';
import { colorCheck } from '../utils/validate';
import Logo from '../components/logo';
import BottomCartBar from '../components/bottomCartBar';
import ProductGrid from './product/grid';
import 'semantic-ui-css/semantic.min.css';

class Root extends Component{
	constructor(props){
		super(props);
	}		
	componentDidMount(){
		const { getLayout } = this.props;
		getLayout();
	}
	shouldComponentUpdate(nextProps){
		const { layout } = this.props;
		return layout !== nextProps.layout;
	}
	styleSetting(layout){
		document.body.style.overflow = "hidden";
		let bodyStyle = {
			display: 'flex',
			margin : 0 ,
			backgroundColor : 'white',
			height: '100vh',
			justifyContent : 'center'
		};
		let mainStyle = {
			display : 'flex',
			flexDirection : 'column',
			alignItems : 'center',
			justifyContent : 'space-between',
			width : '100%',
			backgroundColor : 'white'	
		};
		Object.keys(layout).map((property)=>{
			if(layout[property] !== null && layout[property] !== undefined){
				let thisValue = layout[property];
				switch(property){
					case 'bodyColor':
						if(colorCheck(thisValue) === true) 
							bodyStyle.backgroundColor = thisValue;
					break;
					case 'bodyImage':
						bodyStyle.backgroundImage = `url(${thisValue})`;
					break;
					case 'bgRepeat':
						bodyStyle.backgroundRepeat = thisValue;
					break;
					case 'bgSize':
						bodyStyle.backgroundSize = thisValue;
					break;
					case 'mainColor':
						mainStyle.backgroundColor = thisValue;
					break;
					case 'mainWidth':
						if( !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))  ) {
							mainStyle.width = thisValue+'%';
						}
					break;
					case 'mainOpacity':
						mainStyle.opacity = thisValue;
					break;
				}
			}
		});
		return {
			body : bodyStyle,
			main : mainStyle
		};
	}
	render(){
		const { layout } = this.props;
		const renderStyle = this.styleSetting(layout);
		return (
			<div style={renderStyle.body}>
				<div style={renderStyle.main}>
					<Logo layout={layout}/>				
					<ProductGrid layout={layout}/>
					<BottomCartBar layout={layout}/>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state){
	return { 
		layout : state.layout.settings
	}
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ 
		getLayout
	}, dispatch)
};

export default connect(mapStateToProps,mapDispatchToProps)(Root);

