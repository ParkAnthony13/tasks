
// const express = require("express")
// const cors = require("cors")
// const app = express()
// const port = 8000

// app.use(cors())
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

// require("./config/mongoose.config")

// const taskRoutes = require('./routes/task.routes') // name isn't used anywhere else
// taskRoutes(app)

// app.listen(port, () => console.log(`EXPRESS LISTENING ON ${port}`))

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

app.get("/api/test",(req,res) => {
    const sqlSelect = "SELECT * FROM movie_reviews;";
    db.query(sqlSelect, (err,result) => {
        res.send(result);
    })
})

app.post("/api/test/insert",(req,res) => {
    const movieName = req.body.movieName;
    const movieReview = req.body.movieReview;

    const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview, createdAt, updatedAt) VALUES (?,?,NOW(),NOW());"
    db.query(sqlInsert, [movieName, movieReview], (err, result) => {
        console.log(err);
    })
})

app.delete('/api/test/delete/:movieName',(req,res) => {
    const name = req.params.movieName
    const sqlDelete = "DELETE FROM movie_reviews WHERE movieName = ?"
    db.query(sqlDelete, name, (err,result) => {
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

// log in reg //////////////////////////////////////////////////////////////
app.get("/api/accounts",(req,res) => {
    const sqlSelect = "SELECT * FROM users;";
    db.query(sqlSelect, (err,result) => {
        res.send(result);
    })
})

app.post('/api/accounts', (req,res) => {
    const username = req.body.username
    const password = req.body.password
    const firstName = req.body.firstName
    const lastName = req.body.lastName

    const sqlInsert = "INSERT INTO users (username, password, firstName, lastName, createdAt, updatedAt) VALUES (?,?,?,?,NOW(),NOW());"
    db.query(sqlInsert, [username,password,firstName,lastName], (err,result) => {
        console.log(err);
    })
})

app.delete('/api/accounts/delete/:id',(req,res) => {
    const userId = req.params.id
    const sqlDelete = "DELETE FROM users WHERE id = ?"
    db.query(sqlDelete, userId, (err,result) => {
        if(err) console.log(err);
    })
})
// log in reg //////////////////////////////////////////////////////////////



app.listen(3001, () => {
    console.log("Running on port 3001");
});