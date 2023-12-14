const express = require ("express");

const app = express();
const PORT = 3000;

app.get('/',(request,response)=>{
    response.send("Welcome");
})

app.post('/home',(req,res)=>{
    res.json({
        message: 'Hello'
    })
})

app.listen(PORT,()=>{
    console.log("server is up and running");
})
