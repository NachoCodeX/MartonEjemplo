const express = require('express');
const app=express();
const path = require('path');
const config = require('./config');
app.use(express.static(path.join(__dirname,'public')));


app.listen(config.port,()=>{
  console.log("WORKS");
});
