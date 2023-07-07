require('dotenv').config();
const express = require('express');
const {dbConnection} = require('./src/db/config');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
dbConnection();

app.use(cors());
//app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use(express.urlencoded());
app.use(
  express.urlencoded({
    extended: true,
  }),
);



app.get("/", (req, res) => {
  res.status(200).send({ message: "You are connected to the project" });
  console.log('req.body: ', req.body);
});

app.get('/login', function (req, res) { 
  console.log('req.body: ', req.body);

  console.log(
    `username: ${req.body.username},
    password: ${req.body.password}`,
  );

  res.send(
    `username: ${req.body.username},
    password: ${req.body.password}`,
  );
});


app.use("/api/usuarios", require("./src/routes/usuarios.routes"));
app.use("/api/solicitudes", require("./src/routes/solicitudes.routes"));

app.listen(process.env.PORT, () =>{
    console.log('App listening on PORT: '+ process.env.PORT);
})

module.exports = app;
