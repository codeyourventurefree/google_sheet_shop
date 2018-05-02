import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { amendCart } from './action';
import { Grid, Image, Card , Button , Icon } from 'semantic-ui-react';

class Item extends Component {
	constructor(props){
		super(props);
	}
	render(){
		const { item , layout , amendCart } = this.props;
		const { 
			name , 
			price , 
			thumbnail , 
			description 
		} = item;
		const { currency } = layout;
		return(
			<Grid.Column>
				<Card
					fluid={true}
					image={thumbnail}	
					meta={`${currency} : $${price}`}
					header={name}
					description={(description !== undefined && description !== null) ? description : null}
					extra={
						<Grid>
							<Grid.Column className='ui two buttons computer only'>
								<Button 
									basic 
									color='green' 
									onClick={()=>amendCart('add',item)}
								>
									<Icon name="plus"/>
								</Button>
								<Button 
									basic 
									color='red' 
									onClick={()=>amendCart('minus',item)}
								>
									<Icon name="minus"/>
								</Button>
							</Grid.Column>	
						</Grid>
					}
				/>
			</Grid.Column>
		)
	}
}

function mapStateToProps(state){
	return { 
	}
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ 
		amendCart
	}, dispatch)
};

export default connect(null,mapDispatchToProps)(Item);
