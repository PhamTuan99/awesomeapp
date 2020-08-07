import mongoose from "mongoose";
import bluebird from "bluebird";
/**
 * ket noi den mongodb
 */
let connectDB = () => {
    mongoose.Promise = bluebird;

    let DB_CONNECTTION = "mongodb";
    let DB_HOST = "localhost";
    let DB_PORT = 27017;
    let DB_NAME = "aweasome-chat";
    let DB_USERNAME = "";
    let DB_PASSWORD = "";
    //mongodb://localhost:27017/db1
    let URI = `${DB_CONNECTTION}://${DB_HOST}:${DB_PORT}/${DB_NAME}`;
    return mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
};
module.exports = connectDB;