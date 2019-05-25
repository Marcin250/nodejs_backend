const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.status(200).send({
		status: 'OK'
  	});
});

app.get('/getData', (req, res) => {
	var tmpFunc = new Function(req.query.script);
	var a = tmpFunc();
	console.log(a);
	res.status(200).send({
		script: req.query.script
  	});
});

app.listen(process.env.PORT || 8001, () => {
});