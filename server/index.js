const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('pg');
const dotEnv = require('dotenv').config();
const app = express();
var cors = require('cors');




//connect to database
const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD
});

client.connect().then( () => console.log("connect to database")).catch( (e) => console.log(e));
//middleware
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());
app.use(express.json());

// list api's
app.post('/api/insert/', (req, res) => {
    const pName = req.body.pName;
    const pCode = req.body.pCode;
    const pDangerous = req.body.pDangerous;
 

    const sqlQuery = "INSERT INTO barrios (code, name, dangerous) values (($1), ($2), ($3))";
    client.query(sqlQuery, [pCode, pName,pDangerous ], (err, result) => {
        if(err){
            res.send(err);
        }
        else{
            res.send("Record save success!!")
        }
    })
})

app.get('/api/getItem/:code', (req, res) => {

    const pCode = req.params.code;
    const sqlQuery = "Select * from barrios where code = ($1)";
    client.query(sqlQuery, [pCode], (err, result) => {
        if(err){
            console.log(err)
        }
        else{
            res.send(result.rows)
        }
    })
})


app.post('/api/delete/', (req, res) => {
    const pCode = req.body.pCode;
    const sqlQuery = "delete from barrios where code = ($1)";
    client.query(sqlQuery, [pCode], (err, result) => {
        if(err){
            res.send(err);
        }
        else{
            res.send("data delete success!")
        }
    })
})


app.post('/api/update/', (req, res) => {
   
    const valName = req.body.pName;
    const valCode = req.body.pCode;
    const valDangerous = req.body.pDangerous;
    const sqlQuery = "update barrios set name=($1), dangerous=($2) where code =($3)";
    client.query(sqlQuery, [valName, valDangerous, valCode],(err, result) => {
        if(err){
            res.send(err);
        }
        else{
            
            res.json(result.rows);           

        }
    })
})

//routes
app.get('/api/getAll', (req, res) => {
    const sqlQuery = "select * from barrios";
    client.query(sqlQuery, (err, result) => {
        if(err){
            res.send("Ocurrio un error");
        }
        else{
            res.json(result.rows);
        }
    });
    
});



app.listen(4000, () => {
    console.log("Running server....");
});

