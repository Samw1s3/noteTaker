const express = require('express');
const webRouter = require('./routes/web');
const apiRouter = require('./routes/api');

const app = express();

const PORT = process.env.PORT || 80;
app.use( express.static('public'));

app.use(express.json());

app.use(webRouter);
app.use(apiRouter);



app.listen(PORT, function(){
    console.log(`App is running on http://localhost:${PORT}`)
});