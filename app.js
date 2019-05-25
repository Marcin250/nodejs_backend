const express = require('express')
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/getData', (req, res) => {
  res.status(200).send({
  	var portVariables = req.query.variables;
  	var port = req.query.port;
  	portVariables: portVariables,
    port: port,
  })
});

app.listen(PORT, () => {
});

function getData(variables, port) {
	console.log('Port: '+port)
}