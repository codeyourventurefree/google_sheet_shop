import { request } from '../../utils/fetch';
import { googleParams } from '../../config/env';
const { 
	sheets_api,
	api_key , 
	layout_id 
} = googleParams;

export function getLayout(){
	return (dispatch, getState)=>{
		const index = [
			'bodyColor',
			'bodyImage',
			'bgRepeat',
			'bgSize',
			'mainColor',
			'mainImage',
			'mainRepeat',
			'mainWidth',
			'mainOpacity',
			'logoImage',
			'logoHeight',
			'logoWidth',
			'barBottomColor',
			'barBottomHeight',
			'itemPerRow',
			'currency'
		];
		let layout = {};
		index.map((item,num)=>{
			layout[item] = num + 1;
		});
		request(sheets_api+layout_id+'?includeGridData=true&key='+api_key, 'GET')
			.then((res)=>{
				//console.log(res);
				const { rowData } = res['sheets'][0]['data'][0];
				Object.keys(layout).map((key)=>{
					//console.log(rowData[layout[key]]['values'][1]['formattedValue']);
					const cellValue = rowData[layout[key]]['values'];
					(cellValue[1] !== null && cellValue[1] !== undefined) ?
						layout[key] = cellValue[1]['formattedValue'] : 
						layout[key] = null;
				});
				dispatch({ 
			 		type : 'SET_LAYOUT',
					value : layout
				});

			});

	}
}



