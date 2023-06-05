const router = require("./routes/router");
const express = require("express");
const cors = require("cors");
require('dotenv').config();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);
app.use(cors());

app.listen(process.env.PORT, ()=>{
    console.log('_____Start_____')
    console.log(`http://localhost:${process.env.PORT}`)
});