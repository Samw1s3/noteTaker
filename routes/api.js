const express = require('express');
const path = require('path');
const router = express.Router();
const fs = require('fs');
const { v4 } = require ('uuid');


const dbPath = path.join(__dirname, '..','db', 'db.json');

function getNotes(){
    return JSON.parse(fs.readFileSync(dbPath, 'utf8'));
}

function saveNotesToDb(notes){
    fs.writeFileSync(dbPath, JSON.stringify(notes), 'utf8');
}

router.get('/api/notes', (req,res) => {
    console.log('working');

    res.json(getNotes())

});

router.post('/api/notes',(req,res) => {
    //create a new note
    console.log(req.body);

    //read the req body for the note title and text
    const title = req.body.title;
    const text = req.body.text;

    //generate an ID to the new note
    const newNote = {
        id: v4(),
        title: title,
        text: text,
    }

    const notes = getNotes();

    notes.push(newNote);

    saveNotesToDb(notes);

    res.json({
        data: 'ok',
    })

});

router.delete('/api/notes/:id', (req,res) => {
    // get all the notes
    const notes = getNotes();
    // filter out the target note
    const result = notes.filter((note) => {
        return note.id !== req.params.id
    })

    // save to db

    saveNotesToDb(result);

    res.json({
        data: 'ok'
    })



})
module.exports = router;