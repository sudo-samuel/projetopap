const express = require('express');
const router = express.Router();
const { Todos } = require('../models');

router.get('/completed', async (req, res) => {
    const listOfTodos = await Todos.findAll({ where: { completed: false  } });
    res.json(listOfTodos);  
});

router.post("/", async (req, res) => {
    const todo = req.body;
    await Todos.create(todo);
    res.json(todo);
});

router.put("/completed", async (req, res) => {
    
});

module.exports = router;
