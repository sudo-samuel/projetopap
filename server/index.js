const express = require('express');
const cors = require('cors');

const app = express();

//MIDDLE WARES

app.use(express.json());
app.use(cors());


// READ ALL MODELS

const db = require('./models');

// ROUTES

app.get('/', function(req, res){
    res.json("EXPRESS BACK-END SERVER")
});


const todosRouter = require('./routes/Todos');
app.use("/todos", todosRouter);

const newProjectRouter = require('./routes/Projects');
app.use("/projeto", newProjectRouter);

const usersRouter = require('./routes/Users');
app.use("/users", usersRouter);

const invitesRouter = require('./routes/Invites');
app.use("/invites", invitesRouter);

const membersRouter = require('./routes/Members');
app.use("/members", membersRouter);

const notesRouter = require('./routes/Notes');
app.use("/notes", notesRouter);

const rolesRouter = require("./routes/Roles");
app.use("/roles", rolesRouter);

const teamsRouter = require("./routes/Teams");
app.use("/teams", teamsRouter);


// START DB AND INITIATE ALL MODELS AND SERVER
db.sequelize.sync().then(() => {
    app.listen(3001, (req, res) => {
        console.log("Backend server running.");
    });
})



