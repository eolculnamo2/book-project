const express = require('express');
const app = express();

//controllers
const pages = require('./controllers/pages');
const authentication = require('./controllers/authentication');

app.use(express.static('dist'));

app.use('/', pages);
app.use('/authentication', authentication);

app.listen(8080, () => console.log("Server running on port 8080"));
