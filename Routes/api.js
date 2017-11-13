//Import/require
const express = require('express');
const route = express.Router();
const User = require('../Models/users');
//Get all users
route.get('/users',(req,res)=>{
    console.log("GET request made");
    //find all the users in the document and then pass the data(users)
    //through a function and send the data as a responseS
    User.find({}).then((users)=>{
        res.send(users);
    }); 
});
//get a user by username
//update-parapmeters "/:username" is a variable that when its sent to the server is housed inside the req object
route.get('/users/:username',(req,res)=>{
    console.log("GET request made");
    User.find({username:req.params.username}).then((users)=>{
        res.send(users);
    }); 
});
//Create a user
route.post('/users',(req,res)=>{
    console.log("POST request made");
    //sent body to db and then sends the data back as a response
    User.create(req.body).then((user)=>{
        //send back created user
        res.send(user);
    })
});
//update-parapmeters "/:id" is a varibale that when its ent to the server is housed inside the req object
route.put('/users/:id',(req,res)=>{
    console.log("PUT request made");
    //find the document by the id and update it with the bod of the PUT request
    User.findByIdAndUpdate({_id:req.params.id},req.body).then(()=>{
        //send back updated user(have to connect and find the updated version from the db)
        User.findOne({_id:req.params.id}).then((user)=>{
            res.send(user);
        });
    });
});
//delete a user
route.delete('/users/:id',(req,res)=>{
    console.log("DELETE request made");
    //find the document by the id and then remove it
    User.findByIdAndRemove({_id:req.params.id}).then((user)=>{
        res.send(user);
    });
});
//export route
module.exports = route;