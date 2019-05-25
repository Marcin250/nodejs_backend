const express = require('express');
const app = express();

const {NodeVM, VMScript} = require('vm2');
const vm = new NodeVM();

app.get('/', (req, res) => {
	res.status(200).send({
		status: 'OK'
  	});
});

app.get('/getData', (req, res) => {
	var tmpFunc = new Function(req.query.script);
	res.status(200).send({
		script: req.query.script,
		result: tmpFunc()
  	});
});

app.listen(process.env.PORT || 8001, () => {
});