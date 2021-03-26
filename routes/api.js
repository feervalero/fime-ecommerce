const express = require("express");
const Product = require("../models/product");
const router = express.Router();
/*body starts*/

router.get('*', (req, res) => {                       
    res.sendFile(path.resolve(__dirname, 'store/build/index.html'));                               
});

router.get("/",(req,res)=>{
    Product.find({})
    .then((data)=>res.json(data))
    .catch((error)=>console.log(error));
});

router.post("/save",(req,res)=>{
    const data = req.body;
    const newProduct = new Product(data);

    newProduct.save((error) =>{
        if(error){
            res.status(500).json({msg:"Sorry internal message error"})
        }else{
            res.json({msg:"Data saved"})
        }
    });
})



/*body ends*/
module.exports = router;
