const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.status(200).send({
		status: 'OK'
  	});
});

app.get('/getData', (req, res) => {
	let script = req.query.script;
	res.status(200).send({
		script: req.query.script,
		result: eval(script)
  	});
});

app.listen(process.env.PORT || 8001, () => {
});