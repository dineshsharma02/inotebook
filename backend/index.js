const connectToMongo = require('./db');
const express = require('express');
connectToMongo();
const app = express()
const port = 3000
app.get('/',(req,res)=>{
    res.send("hello there!")
})


app.get('/api/v1/login',(req,res)=>{
    res.send("hello there!this is a login page!!!")
})

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})