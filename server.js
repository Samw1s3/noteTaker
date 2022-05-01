const path = require('path');
const express = require('express');
const webRouter = require('./routes/web');
const apiRouter = require('./routes/api');

const app = express();

const PORT = 3001;

app.use(webRouter);

app.use( express.static('public') );

app.listen(PORT, function(){
    console.log(`App is running on http://localhost:${PORT}`)
});