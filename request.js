const key = '1ffe41b96bd5ec047b58f64a02a86fdb';

//const baseURL='https://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=1ffe41b96bd5ec047b58f64a02a86fdb';

/* fetch(baseURL)
	.then((data) => { console.log('response',data.json())})
	.catch((error) => {
		console.log(error);
	}) */

const requestCity = async(city) => {
		const baseURL='http://api.openweathermap.org/data/2.5/weather' 
		const query = `?q=${city}&appid=${key}`;
		
		//calling weather API
		const response = await fetch (baseURL + query);
		
		//output data
		const data = await response.json();
		return data;
}
