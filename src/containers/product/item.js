import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { amendCart } from './action';
import { Grid, Image, Card , Button , Icon , Transition , Modal } from 'semantic-ui-react';

class Item extends Component {
	constructor(props){
		super(props);
		this.state = { quantity : 0 , status : false };
	}
	shouldComponentUpdate(nextProps){
		return true;
	}
	componentDidMount(){
		setTimeout(()=>this.setState({ status : true }),500);
	}
	changeQuantity(action,quantity){
		if(action === 'add'){
			this.setState({ quantity : quantity +=1  });
		}	else {
			if(quantity > 0){
				this.setState({ quantity : quantity -=1  });
			}
		}
	}
	render(){
		const { item , layout , amendCart } = this.props;
		const { quantity ,status } = this.state;
		const { 
			name , 
			price , 
			thumbnail , 
			description,
			images
		} = item;
		const { currency } = layout;
		return(
				<Transition
					visible={status}
					animation={'horizontal flip'}
					duration={500}
				>
			<Grid.Column>
				<Card
					fluid={true}
					image={thumbnail}	
					meta={`${currency} : $${price}`}
					header={name}
					description={(description !== undefined && description !== null) ? description : null}
					extra={
						<Grid>
							<Grid.Row columns={2}>
							<Grid.Column className='ui three buttons' width={13} style={{ padding : '5px 10px' }}>
								<Button 
									basic 
									color='green' 
									onClick={()=>{
										amendCart('add',item);
										this.changeQuantity('add',quantity);
									}}
								>
									<Icon name="plus"/>
								</Button>
								
								<Button 
									basic 
									color={'grey'}
									disabled={true}
								>
									{quantity}
								</Button>
								<Button 
									basic 
									color='red' 
									onClick={()=>{
										amendCart('minus',item);
										this.changeQuantity('minus',quantity);
									}}
								>
									<Icon name="minus"/>
								</Button>
							</Grid.Column>
							<Grid.Column width={2} style={{ padding : '5px 2px' }}>
								<Modal trigger={<Button icon disabled={images.length === 0}><Icon name='search'/></Button>} 
									style={{ 
										minHeight : '100vh' , 
										display : 'flex' , 
										flex : 1 , 
										alignItems : 'center', 
										justifyContent : 'center',  
										margin : 'auto' 
									}} 
									basic
								>
									<Modal.Content style={{ margin : 'auto'  }}>
										{images.map((image,key)=>
											<Image key={key} src={image} size={'large'} style={{ margin : '20px auto'  }}/>
										)}
									</Modal.Content>
								</Modal>
							</Grid.Column>	
							</Grid.Row>
						</Grid>
					}
				/>
			</Grid.Column>
				</Transition>
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
