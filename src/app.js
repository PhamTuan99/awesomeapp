import express from "express";
import connectDB from "./config/connectDB";
import ContactModel from "./models/contact.model";
// let express = require("express");
let app = express();

//connetc to mongodb
connectDB();

const host = "localhost"
const port = 2700;
app.get("/home", (req, res) => {
    res.send("<h1>asd</h1>");
});
app.get("/test", async(req, res) => {
    try {
        let item = {
            userID: "abc",
            contactID: "eef"
        };
        let contact = await ContactModel.createNew(item);
        res.send(contact);
    } catch (err) {
        console.log(err);
    }
})
app.listen(port, host, () => {
    console.log(`running on ${host}:${port}`);
});