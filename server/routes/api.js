const express = require("express");
const router = express.Router();
const fs = require('fs');

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
    res.send("api!!!");
})

router.get('/list/next', (req, res) => {
    res.send("api!!!");
})
module.exports = router;