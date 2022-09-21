const express = require('express');
const { validateToken } = require('../middlewares/AuthMiddleware');
const router = express.Router();
const { Projects } = require('../models');

router.get('/', async (req, res) => {
    const listOfProjects = await Projects.findAll();
    res.json(listOfProjects);  
});

router.post("/", validateToken, async (req, res) => {
    const project = req.body;
    console.log(project.name)
    await Projects.create(project);
    res.json("Foi criada o projeto" + project);
})

router.get("/ProjetoById/:id", async(req, res) => {
    const id = req.params.id;
    const project = await Projects.findOne({where: {UserId: id}})
    if(!project){
        res.json( { erro: "Projeto não encontrado." });
    } else {
        res.json(project);
    }

    
} )

module.exports = router;
