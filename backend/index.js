const router = require("./routes/router");
const express = require("express");
require('dotenv').config();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

app.listen(process.env.PORT, ()=>{
    console.log('_____Start_____')
    console.log(`http://localhost:${process.env.PORT}`)
});