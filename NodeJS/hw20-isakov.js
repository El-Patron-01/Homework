const http = require('http');
const url = require('url');
const path = require('path')

const users = [
	{ userName: 'Boria', id: 1, email: 'boria23@gmail.com'},
	{ userName: 'Vasia', id: 2, email: 'boria23@gmail.com'},
	{ userName: 'Misha', id: 3, email: 'boria23@gmail.com'},
	{ userName: 'Misha', id: 3, email: 'boria23@gmail.com'},
	{ userName: 'Misha', id: 3, email: 'boria23@gmail.com'},
	];
  
  function createServer(req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', '*');
	
	const adr = url.parse(req.url, true);
	const query = adr.query;
	const pathName = adr.pathname;

	if(pathName === '/users') {
		const result = users.find((user) => user.id === +(query.id)) ? //или можно было еще поставить нестрогое равенство как вариант
		users.find((user) => user.id === +(query.id)) :
		"User with following id does not exist"; 
		res.end(JSON.stringify(result));
	  }

	if (req.url === '/user') {
		res.end(JSON.stringify({ userName: 'Boria', id: 1, email: 'boria23@gmail.com'}))
	}
	
	
	res.end(JSON.stringify({ name: 'Choose your destination'}));
  }
  
  http.createServer(createServer).listen(8090, () => console.log('Server is running on port 8090') );


















// const http = require('http');
// const url = require('url');

// console.log('23')

// http.createServer((req, res) => {
// 	res.setHeader('Access-Control-Allow-Origin', '*');
// 	if (req.url === '/user') {
// 		res.end(JSON.stringify({ userName: 'Boria', id: 1, email: 'boria23@gmail.com'}))
// 	}
// 	// if (req.url === 'users?id=1')
// }).listen(8090, () => console.log('Server is running'))