const { response } = require('express');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, response) => response.send("This is working"));

app.listen(port, () => console.log(`My first app listening on port: ${port}`))