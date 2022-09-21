const express = require('express');
const router = express.Router();
const { Notes } = require('../models');

router.get('/', async (req, res) => {
    const id = req.body;
    try {
        const listOfNotes = await Notes.findAll({ where: { UserId: req.user.id}});
        res.json(listOfNotes);  
    }catch(e){
        res.json(e)
    }
});

router.post("/criarNota", async (req, res) => {
    const note = req.body;
    await Notes.create(note);
   
})

module.exports = router;