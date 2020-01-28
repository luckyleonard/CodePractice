var express = require('express');
var app = express();
let jrCount = 0;
app.get('/', (req,res) => {res.send('Hello World');});
app.get('/jr/:user', (req,res) => {
  jrCount ++;
  console.log(jrCount);
  res.send('Hello JR');
});

const requestComing = (req,res,next) => {
  console.log("requirec is comming");
  next();
}

const authCheck = (req,res,next) => {
  if(req.params.user.include('jr')){
    res.send('accept');
  }
  else{
    res.send('strange')
  }
  next();
}



app.listen(5000, () => {
  console.log("serve is running with 5000");
});

