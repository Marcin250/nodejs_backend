const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.status(200).send({
		status: 'OK'
  	});
});

app.get('/getData', (req, res) => {
	res.status(200).send({
		dane: req.query.variables,
    	skrypt: 'document.write("<font class=spy2>:</font>"+' + req.query.port + ')'
  	});
});

app.listen(process.env.PORT || 8001, () => {
});