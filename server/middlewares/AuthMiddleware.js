const {verify} = require("jsonwebtoken");


const validateToken = (req, res, next) => {
    const tkn = req.header("tkn")
    if(!tkn) {
        return res.json({erro: "É preciso dar login"});

    } else {
        try {
            const vldtTkn = verify(tkn, "75CBD3");
                if(vldtTkn) {
                    return next();
                }
        } catch (err) {
            return res.json({erro: err});
        }
    };

    
}

module.exports = { validateToken }
