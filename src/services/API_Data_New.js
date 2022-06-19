const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '064063e3acmsh75cc32a26f9f946p1dfcdbjsn7e7745d2f48c',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};

fetch('https://tasty.p.rapidapi.com/tips/list?id=3562&from=0&size=30', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));