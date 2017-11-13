const mongoose = require('mongoose');
const schema = mongoose.Schema;
//Create user model and schema
const CommentSchema = new schema({
    c_content:String,
    c_date:{
        type:Date,
        default: Date.now
    }
});
const PostSchema = new schema({
    title:String,
    subject:String,
    p_content:String,
    p_date:{
        type:Date,
        default: Date.now
    },
    comments:[CommentSchema]
});
const UserSchema = new schema({
    firstname:String,
    lastname:String,
    email:String,
    username:{
        type:String,
        required:[true,'Username field is required']
    },
    password:{
        type:String,
        required:[true,'Password field is required']
    },
    creator:{
        type:Boolean,
        default:false
    },
    posts:[PostSchema]
});
//think of it as creating a collection/table using the schema
const User = mongoose.model('user', UserSchema);
//export the model
module.exports = User;