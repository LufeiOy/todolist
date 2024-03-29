const express = require("express");
const router = express.Router();
const fs = require('fs');
var _ = require("underscore");
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://lufei:lufei@cluster0.nadlc7p.mongodb.net/test", {useNewUrlParser: true})
const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: String,
    start_time: String,
    end_time: String,
    urgency: String,
    importace: String,
    finished: Boolean
})
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    tasks: [taskSchema]
});
const User = mongoose.model("user", userSchema);
const guest = new User({
    username: "Guest",
    password: "",
    tasks: [{
    title: "Add your first task",
    description: "Fill out the form and create your first task",
    date: "",
    start_time: "",
    end_time: "",
    urgency: "",
    importace: "",
    finished: false
    }]
})

//User.insertMany([guest])

router.get('/', (req, res) => {
    res.send("api!!!");
})

router.get('/list/all', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    User.find({username:"Guest"},function(err, user){
        if(err){
            console.log(err);
        }else{
            //filter for only not finished tasks
            res.end(JSON.stringify(user[0]["tasks"].filter((task) => {
                return !task['finished']
            })));
        }
    })
    
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
    console.log(req.body)
    User.findOneAndUpdate(
        { username: "Guest" }, 
        { $push: {"tasks": req.body} },
       function (error, success) {
             if (error) {
                 console.log(error);
             } else {
                 console.log(success);
             }
         });
     
    
})
router.put('/list/update/:id', (req, res) => {
    console.log(req.params.id)
    User.findOneAndUpdate(
        { username: "Guest",
            tasks:{$elemMatch: {_id: req.params.id}} }, 
        { $set: {
            'tasks.$': {
                finished: true
            }
        } },
       function (error, success) {
             if (error) {
                 console.log(error);
             } else {
                 console.log(success);
             }
         });
     
    
})
router.delete('/list/delete/:id', (req, res) => {
    console.log(req.params.id)
    User.findOneAndUpdate(
        { username: "Guest" }, 
        { $pull: {
                'tasks': {
                    _id: req.params.id
                }
            } },
       function (error, success) {
             if (error) {
                 console.log(error);
             } else {
                 console.log(success);
             }
         });
     
    
})
router.post('/signup', express.json(), (req, res) => {
    console.log(req.body)
})

// for future development check 23:00 https://www.youtube.com/watch?v=fgTGADljAeg&list=PLDrsIhIkpKkHff2b687KOmOespvSNDyTk&index=2&t=1483s
// async function getUser(){

// }

module.exports = router;