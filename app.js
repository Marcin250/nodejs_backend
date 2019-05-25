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
	const script = new VMScript(req.query.script);
	res.status(200).send({
		skrypt: vm.run(script)
  	});
});

app.listen(process.env.PORT || 8001, () => {
});