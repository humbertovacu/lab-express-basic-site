const { response } = require('express');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get('/', (request, response) => response.sendFile(__dirname + '/views/home-page.html'));
app.get('/about', (require, response) => response.sendFile(__dirname + '/views/about.html'));
app.get('/works', (require, response) => response.sendFile(__dirname + '/views/works.html'));


app.listen(port, () => console.log(`My first app listening on port: ${port}`))