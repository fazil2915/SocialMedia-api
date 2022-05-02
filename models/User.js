const mongoose=require("mongoose");
 
const Userschema=new mongoose.Schema({
    username:{
        type:String,
        require:true,
        min:3,
        max:6,
        unique:true 
    },
    email:{
        type:String,
        required:true,
        max:50,
        unique:true
    },
    password:{
        required:true,
        type:String
    },
    profilePicture:{
        type:String,
        default:""
    } ,  
    coverPhoto:{
        type:String,
        default:""
    } , 
    followers:{
        type:Array,
        default:[]
    },
    following:{
        type:Array,
        default:[]
    } , 
    isAdmin:{
        type:Boolean,
        default:false
    },
},
    {timestamps:true}
);

module.exports=mongoose.model("User",Userschema);

