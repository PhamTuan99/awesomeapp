import express from "express";
// let express = require("express");
let app = express();
const host = "localhost"
const port = 2700;
app.get("/home", (req, res) => {
    res.send("<h1>asd</h1>");
})
app.listen(port, host, () => {
    console.log(`running on ${host}:${port}`);
});