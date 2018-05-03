import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProduct } from '../product/action.js';
import { Grid, Image, Segment , Loader } from 'semantic-ui-react';
import Item from './item';

let styles = { 
	main : {
		width : '95%',
		backgroundColor : 'white',
		flexDirection : 'column',
		height : '80vh',
		overflowY: 'auto',
		overflowX : 'hidden',
	},
	wrapper : {
		maxWidth : '1080px',
		padding : '10px 5px',
		margin : 'auto'
	}
}

class ProductGrid extends Component {
	constructor(props){
		super(props);
	}
	componentDidMount(){
		const { getProduct } = this.props;
		getProduct();
	}
	shouldComponentUpdate(nextProps){
		const { products , layout } = this.props;
		return products !== nextProps.products || layout !== nextProps.layout;
	}
	render(){
		const { layout , products } = this.props;
		console.log(products);
		return(
			<div style={styles.main}>
				<Grid 
					stackable 
					columns={(layout['itemPerRow'] !== undefined && layout['itemPereRow'] !== null) ? layout['itemPerRow'] : 3 } 
					style={styles.wrapper}
				>
					{(products !== undefined) ? products.map((item,key)=><Item key={key} item={item} layout={layout}/>) : <Loader active/>}
				</Grid>
			</div>
		)
	}
}
			
function mapStateToProps(state){
	return { 
		products : state.products.list
	}
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ 
		getProduct
	}, dispatch)
};

export default connect(mapStateToProps,mapDispatchToProps)(ProductGrid);
