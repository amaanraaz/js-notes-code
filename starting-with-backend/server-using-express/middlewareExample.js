const express = require ("express");

const app = express();
const PORT = 3000;

const myLogger = (req,res,next)=>{
    console.log("Logging from middleware 1");
    // if returned from any middleware it will not goto next one
    // return res.json({
    //     message : "done"
    // })
    next(); // calls the next middleware
    
}

const extLogger = (req,res,next)=>{
    console.log("Logging from middleware 2");
    next();
}

app.get('/', myLogger, extLogger, (request,response)=>{
    console.log("Last middleware");
    response.send("Welcome");
})

app.listen(PORT,()=>{
    console.log("server is up and running");
})
