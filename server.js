const path = require('path');
const express = require('express');

const app = express();

const PORT = 3001;


app.use( express.static('pibluc') );

app.get('/', (req,res) => {

    const indexHtmlPath = path.join(__dirname, 'public', 'index.html');
    res.sendFile(indexHtmlPath);

})

app.get('/notes', (req,res) =>{
    
    const notesHtmlPath = path.join(__dirname, 'public', 'notes.html');
    res.sendFile(notesHtmlPath);
});


app.listen(PORT, function(){
    console.log(`App is running on http://localhost:${PORT}`)
});