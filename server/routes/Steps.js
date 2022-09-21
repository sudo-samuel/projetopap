const express = require('express');
const router = express.Router();
const { Steps } = require('../models');

/* router.get('/', async (req, res) => {
    const listOfProjects = await Projects.findAll();
    res.json(listOfProjects);  
});

router.post("/", async (req, res) => {
    const project = req.body;
    await Projects.create(project);
    res.json(project);
}) */

module.exports = router;