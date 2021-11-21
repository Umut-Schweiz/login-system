const express = require("express");
const path = require('path')
const mysql = require("mysql");
const dotenv = require("dotenv");
const routes = require("./routes/pages");


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

//Parse URL -encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({extended: false }));
//Parse JSON bodies (as sent by API clients)
app.use(express.json())

//Using hbs >> This will render .hbs files when res.render is called.
app.set('view engine', 'hbs');

db.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("MYSQL Connected")
    }
})

app.use('/', routes);
app.use('/auth', require("./routes/auth"));


app.listen(3000, () => {
    console.log("Server started on port")
})


