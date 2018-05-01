import 'whatwg-fetch';

export const request = (url, method, data, auth) => {
	let options = {
		method: method,
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	};
	if(data !== null && data !== undefined){
		options.body = data;		  
	};
	if(auth){
		options.headers['X-Postmark-Server-Token'] = auth;
	}
	console.log(options);
	return new Promise((resolve, reject)=>{
		fetch(url, options)
			.then(response=>{
				return response.json();
			})
			.then(res=>{
				if(!res.error){
					resolve(res);
				}	else {
					reject(res.error)
				}
			})
			.catch(err=>{
				reject(err)
			});
	});
}
