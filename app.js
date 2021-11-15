const express = require("express")

const app = express();

app.get("/" , (req, res) => {
    res.send("<h1>Home Page Startted</h1>")
});

app.listen(3000, () => {
    console.log("Server started on port")
})

