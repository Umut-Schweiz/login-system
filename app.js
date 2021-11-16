const express = require("express");
const path = require('path')
const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    datebase: process.env.DB
})

const publicDirectory = path.join(__dirname, './public')

app.use(express.static(publicDirectory))

app.set('view engine', 'hbs');

db.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("MYSQL Connected")
    }
})


app.get("/", (req, res) => {
    //res.send("<h1>Home Page Started</h1>")
    res.render("index")
});

app.listen(3000, () => {
    console.log("Server started on port")
})


