const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');

const app = express();
const port = 3003;

app.use(morgan('combined'));
app.get("/", (req,res) =>{
    res.send('Hello my fisrt NodeJS ทดสอบ');
})

app.listen(port, ()=>{
    debug("Listening on port : ",port);
})