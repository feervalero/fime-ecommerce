const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");


const app = express();

const PORT = process.env.PORT || 8080;

app.use(morgan("tiny"));

app.get('/api',(req,res)=>{
    const data = {
        name:"Fernando"
    };
    res.json(data);
});


app.listen(PORT,console.log("listening in port "+PORT));