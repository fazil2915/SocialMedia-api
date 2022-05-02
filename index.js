const express=require("express");
const morgan=require("morgan");
const mongoose=require("mongoose");
const helmet=require("helmet");
const dotenv=require("dotenv");
const app=express();
const userRouter=require("./routes/users");
const authRouter=require("./routes/auth");

dotenv.config();

mongoose.connect(process.env.MONGO_URL,()=>{
    console.log("Mongodb connected");
});
//middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/users",userRouter);
app.use("/api/auth",authRouter);

//Port address
PORT=3000;
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);

})