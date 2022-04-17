const express = require("express");
const app = express();
const port = 4000;
const path = require("path");


app.get("/",(req,res) => {
    res.send("This is our express server");
});


app.listen(port, () => {
    console.log(`running on port ${port}`)
});