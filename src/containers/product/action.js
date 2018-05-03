import { request } from '../../utils/fetch';
import { googleParams } from '../../config/env';
const { 
	sheets_api,
	api_key , 
	product_id
} = googleParams;

export function getProduct(){
	return (dispatch, getState)=>{
		request(sheets_api+product_id+'?includeGridData=true&key='+api_key, 'GET')
			.then((res)=>{
				//console.log(res);	
				let productList = [];
				let { rowData } = res['sheets'][0]['data'][0];
				rowData.shift();
				rowData.map((data,index)=>{
					console.log(data);
					const { values } = data;
					let product = {};
					product['id'] = index;
					product['name'] = values[0]['formattedValue'];
					product['price'] = values[1]['formattedValue'];
					product['thumbnail'] = values[2]['formattedValue'];
					product['description'] = (values[3]['formattedValue'] !== undefined && values[3]['formattedValue'] !== null) ? values[3]['formattedValue'] : null;
					product['images']=[];

					for(let i = 4 ; i < 9 ; i++){
						if(values[i] !== null && values[i] !== undefined){
							product['images'].push(values[i]['formattedValue']);
						}
					};
					productList.push(product);

				});
				//console.log(productList);
				dispatch({
					type : 'SET_PRODUCTS',
					value : productList
				});
			});
	}
}

export function amendCart(action,item){
	return (dispatch, getState)=>{
		let cart = getState()['products']['cart'].slice();
		let exist = false;
		let remove = null;
		cart.map((cartItem,index)=>{
			if(cartItem.id === item.id){
				exist = true;
				if(action === 'add'){
					cartItem.quantity += 1;				
				} else {
					cartItem.quantity -= 1;
					if(cartItem.quantity === 0) remove = index;
				}
			}
		});
		if(action === 'add'){
			if(exist === false){
				item.quantity = 1;
				cart.push(item);
			}
		} else if (action === 'minus'){
			if(remove !== null){
				cart.splice(remove, 1)
			}
		}
		console.log(cart);
		console.log(action);
		console.log(item);
		dispatch({ 
			type : 'UPDATE_CART',
			value : cart
		});
	}
}

