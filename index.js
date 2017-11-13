//Import/require
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./Routes/api');
const mongoose = require('mongoose');

//Set up App using express function
const app = express();

//connect to mongoose, if blog dosnt exsist it is created 
mongoose.connect('mongodb://localhost/blog');
mongoose.Promise=global.Promise;
//Middleware(where requests come through)
//serves static files without having togo through the rest of the middleware.
app.use(express.static('public'));
//parses request and attachest the body to the req object before 
app.use(bodyParser.json());

//allow this app to use routes from the api and also  uses the routes only when/api is before it
app.use('/api',routes);

//listen for requests using at port stated(4000) or port given by enviromental variable.
// enviroment variables are used by hosting e.g heroku to pass the port to the program
app.listen(4000,()=>{
    console.log("Listnening For request");
});

