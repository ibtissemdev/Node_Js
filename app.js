const express = require('express');
const app = express();

app.listen(5000, () => {
    console.log('Server is listening @5000');
});

const monmodule = require('monmodule');

// Middleware
app.use(express.json());

app.get('/hello', function(request, response) {
    monmodule.direBonjour();
    monmodule.direBye()});

    app.get('/restaurants', function(request, response) {
        monmodule.connect();});