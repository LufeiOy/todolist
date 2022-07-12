const express = require("express");
const app = express();


app.get('/', (req, res) =>{
 res.send("server for to do list");
})

const api = require('./routes/api');
app.use('/api', api);


app.listen(3001, function(){
    console.log("Server started on port 3001");
})