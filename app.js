const express = require('express');
const app = express();
const port = 8001;

app.get('/getData', (req, res) => {
	res.status(200).send({
		dane: req.query.variables,
    	skrypt: req.query.port
  	});
});

app.listen(port, () => {
});