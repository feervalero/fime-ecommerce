const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const router = require("./routes/api");
const cors = require("cors");
/*APP Express */
const app = express();
const PORT = process.env.PORT || 8080;

/*MONGO */
const MONGODBURI = "mongodb+srv://admin:admin@cluster0.6h3ni.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(MONGODBURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});


mongoose.connection.on("connected",()=>{
    console.log("Mongo is connected");
});

app.use(express.json());
app.use(express.urlencoded({extended:false}))

if(process.env.NODE_ENV === "production"){
    app.use(express.static('store/build'));
}

app.use(morgan("tiny"));

app.use('/api',router);



app.listen(PORT,console.log("listening in port "+PORT));