const express = require("express");
const {timezones} = require("../../db/entities");

const router = express.Router();

router.get('/',async (req,res) => {
    const data= await timezones.all()
    res.send(data);    
});

router.get('/:id',async(req,res)=>{
    const data =await timezones.get(req.params.id)
    if(data){
        res.status(200).send(data);
    } else{
        res.sendStatus(404);
    }
    
});

module.exports = router;