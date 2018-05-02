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
				rowData.map((data)=>{
					//console.log(data);	
					const { values } = data;
					let product = {};
					product['name'] = values[0]['formattedValue'];
					product['price'] = values[1]['formattedValue'];
					product['thumbnail'] = values[2]['formattedValue'];
					product['description'] = (values[3]['formattedValue'] !== undefined && values[3]['formattedValue'] !== null) ? values[3]['formattedValue'] : null;

					for(let i = 4 ; i < 9 ; i++){
						if(values[i] !== null && values[i] !== undefined){
							const num = i - 3;
							product['image'+num] = values[i]['formattedValue'];
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
		if(action === 'add'){

		} else if (action === 'minus'){

		}
	}
}

