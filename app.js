//express a open-source web app framework. 
//import express to create application

const express = require('express');
const path = require('path');



//initalize express
const app = express();

//envirnoment variable in node.js, use to set custom value to use throughout application
const PORT = process.env.PORT || 5000;

//serve static html from react where build is

if(process.env.NODE_ENV === 'production'){
  
  app.use(express.static('client/build'));
  app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, 'client','build','index.html'))
  })
}


app.listen(PORT, (err)=>{
  if(err) return console.log(err);
  console.log('server running on port', PORT);
})
