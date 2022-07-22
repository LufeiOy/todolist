const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors())
app.get('/', (req, res) =>{
 res.send("server for to do list");
})

const api = require('./routes/api');
app.use('/api', api);

let port = process.env.PORT;

if (port == null || port == ""){
    port = 3001;
}
app.listen(port, function(){
    console.log("Server started");
})