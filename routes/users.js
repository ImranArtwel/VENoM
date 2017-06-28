/**
 * Created by artwe on 12/06/2017.
 */
const express = require('express');
const config = require('../config/database');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Task = require('../models/taskList');
const mongoose = require('mongoose');


//Register Route
router.post('/register', function (req,res,next) {
    console.log('request has '+req.body)
    var newUser = new User({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password

    });
    
    //add user to db
    User.addUser(newUser, function (err, user) {
      if(err){
          res.json({success: false, msg: 'Failed to register user'});
      }
      else {
          res.json({success: true, msg: 'User registered'});
      }
    })
});

//Authenticate Route
router.post('/authenticate', function (req,res,next) {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, function (err, user) {
     if(err) throw  err;

     if(!user) return res.json({success: false, msg: 'Cannot find user'});

     //compare the password
        User.comparePassword(password, user.password, function (err, isMatch) {
            if(err) throw  err;

            if(isMatch){
                //create token
                const token = jwt.sign(user, config.secret, {
                  expiresIn: 300 // 5 mins
                });

                res.json({success: true,
                          token: 'JWT '+ token,
                          user: {
                           id: user.id,
                           name: user.name,
                           username: user.username
                          }});
            }

            else
                return res.json({success: false, msg: 'Incorrect Password'});
        })


    })

});



//add task router
router.post('/addtask', function (req,res,next) {
    var newTask = new Task({
        title: req.body.title,
        description: req.body.description,
        due_date: req.body.due_date

    });

//add Tasks
    Task.addTask(newTask, function (err, task) {
        if (err)
            return res.json({success: false, msg: "Cannot add task"});
        else
            return res.json({success: true, msg: "Task added",task: task});
    })
});

//delete task

router.delete('/task/:id', function (req,res,next) {

    Task.deleteTask(req.params.id, function (err,task) {
        if (err)
            return res.json({success: false, msg: "Cannot delete task"});
        else
           {

               res.json({success: true, msg: "Task deleted",id: req.params.id});
           }
    })
});

//update task
router.put('/task/:id', function (req,res,next) {
    var updTask = req.body;

        Task.updateTask(req.params.id, updTask,function (err,task) {

            if (err)
                return res.json({success: false, msg: "Cannot update task",error: err});
            else
            {

                res.json({success: true, msg: "Task updates"});
            }

        })


});

//get task
router.get('/tasks', function (req,res,next) {

    Task.find({},function (err,docs) {
        if(err)
            res.json({success: fail, msg: "Cannot retrieve tasks"});
        else
            res.send(docs);
    });
})
//export router
module.exports = router;
