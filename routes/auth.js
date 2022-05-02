const router=require("express").Router();
const { json } = require("express/lib/response");
const User=require("../models/User");
const bcrypt=require("bcrypt");

router.get("/",(req,res)=>{
res.send("welcome auth")
})
router.post("/register",async (req,res)=>{
    
    try{
        //hashing password
     const salt=await bcrypt.genSalt(10);
     const hashedPassword =await bcrypt.hash(req.body.password,salt);
   
     const user = await new User({
        username:req.body.username,
        email:req.body.email,
        password: hashedPassword,

    });
     //saving user 

        await user.save();
        res.status(200).json(user)
    }catch(err){
        console.log(err);
    }
    
})
router.post("/login", async (req,res)=>{
    try{
      const user=await User.findOne({email:req.body.email});
        !user &&res.status(404).json("user not found");  

        validPassword=await bcrypt.compare(req.body.password,user.password);
        !validPassword&& res.status(404).json("password not correct");
         
        res.status(200).json(user);
    }
    catch(err){
        console.log(err);
    }
})

module.exports=router