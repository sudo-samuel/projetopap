const express = require('express');
const router = express.Router();
const { Users } = require('../models');
const bcrypt = require('bcrypt');

const { sign } = require('jsonwebtoken');
const { vldtTkn, validateToken } = require("../middlewares/AuthMiddleware");
const { response } = require('express');


router.post("/", async (req, res) => {
    const { email, password, name, surname } = req.body;
    const user = await Users.findOne( { where: { email: email } } );

    if(user && user.email == email){
        res.json( {erro: "Este email já existe na base de dados."} );
    }else {
        bcrypt.hash(password, 10).then((hash) => {
            Users.create({
                email: email,
                password: hash,
                name: name,
                surname: surname, 
            });
            res.json({sucess: "Utilizador criado com sucesso"} );
        })
    }
});


router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await Users.findOne( { where: { email: email } } )

    if (!user) {
        res.json({erro: "Utilizador não encontrado."});
    }else {
        bcrypt.compare(password, user.password).then(async (bool) => {
            if(!bool) {
                res.json({ erro: "A password que inseriu não corresponde à original"});
            } else {
                const tkn = sign({email: user.email, id: user.id} , "75CBD3");
                res.json({token: tkn, email: email, id: user.id});
            }
        });
    }
})

router.get("/auth", validateToken, (req, res) => {
    res.json(req.user)
})

router.get("/basicinfo/:id", async (req, res)  => {
    const id=req.params.id;
    const basicInfo = await Users.findByPk(id, 
        {attributes: {exclude: ["password"]}
    });
    res.json(basicInfo);
});




module.exports = router;
