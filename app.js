const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.status(200).send({
		status: 'OK'
  	});
});

app.get('/getData', (req, res) => {
	res.status(200).send({
		skrypt: req.query.script
  	});
});

app.listen(process.env.PORT || 8001, () => {
});