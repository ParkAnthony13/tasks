const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");


const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'root',
    database:'tasks_schema'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/accounts",(req,res) => {
    const sqlSelect = "SELECT * FROM Users;";
    db.query(sqlSelect, (err,result) => {
        res.send(result);
    })
})

app.post('/register', (req,res) => {
    const username = req.body.username
    const password = req.body.password
    const firstName = req.body.firstName
    const lastName = req.body.lastName

    const sqlInsert = "INSERT INTO Users (username, password, firstName, lastName, createdAt, updatedAt) VALUES (?,?,?,?,NOW(),NOW());"
    db.query(sqlInsert, [username,password,firstName,lastName], (err,result) => {
        console.log(err);
    })
})

app.delete('/api/accounts/delete/:id',(req,res) => {
    const userId = req.params.id
    const sqlDelete = "DELETE FROM Users WHERE id = ?"
    db.query(sqlDelete, userId, (err,result) => {
        if(err) console.log(err);
    })
})

app.put('/api/test/update/:movieName',(req,res) => {
    const name = req.params.movieName
    const review = req.body.movieReview
    const sqlUpdate = "UPDATE SET movie_reviews movieReview = ? WHERE movieName = ?"
    db.query(sqlUpdate, [review, name], (err,result) => {
        if(err) console.log(err);
    })
})

app.listen(3001, () => {
    console.log("Running on port 3001");
});