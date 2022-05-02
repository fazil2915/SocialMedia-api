const router=require("express").Router();

router.get("/",(req,res)=>{
    res.send("welcome user")
})

module.exports=router