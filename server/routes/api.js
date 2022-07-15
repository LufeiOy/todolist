const express = require("express");
const router = express.Router();
const fs = require('fs');
var _ = require("underscore");

let rawdata = fs.readFileSync('./data.json');
let list = JSON.parse(rawdata);

router.get('/', (req, res) => {
    res.send("api!!!");
})

router.get('/list/all', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(list));
})
router.get('/list/today', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let datetime = new Date();
    let today = datetime.toISOString().slice(0,10);
    let today_list = _.where(list["tasks"], {date: `${today}`});
    console.log(today)
    console.log(today_list)
    res.end(JSON.stringify(today_list));
})
router.post('/list/add', express.json(), (req, res) => {
    list["tasks"].push(req.body)
    console.log(list);
    fs.writeFile("./data.json", JSON.stringify(list), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }); 
    
})

router.get('/list/today', (req, res) => {
    res.send("api!!!");
})

router.get('/list/next', (req, res) => {
    res.send("api!!!");
})
module.exports = router;