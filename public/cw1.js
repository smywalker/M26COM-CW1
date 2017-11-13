//get users
function getUsers(){
    //cache the location of the list we want to update also delete any current elements in the list.
    let $users = $('#datalist').empty();
    //make ajax call
    $.ajax({
        type:'GET',
        url:'http://localhost:4000/api/users',
        success: (users)=>{
            //foreach entry append the list
            $.each(users, (i, user)=>{
                $users.append('<li>Name: '+'<b>'+user.firstname+' '+user.lastname+'</b>' +'<p>email: '+user.email+'</p>'+'Username: '+
                user.username+"<p>Password: "+user.password+'</p>'+'Creator: '+user.creator+'</li>');
            });
    }});
};
//get all posts
function getPosts(){
    //get the location of the list we want to update also delete any current elements in the list.
    let $users = $('#datalist').empty();
    //make ajax call
    $.ajax({
        type:'GET',
        url:'http://localhost:4000/api/users',
        success: (users)=>{
             //foreach entry append the list
            $.each(users, (i, user)=>{
                $users.append('<li>Post Title: '+'<b>'+user.posts[i].title+'</b>'+'<p>Subject: '+user.posts[i].subject+'</p>'+
                'Post Date: '+user.posts[i].p_date+'<p>Post Content: '+user.posts[i].p_content+'</p></li>');
            });
    }});
};
//get all comments
function getComments(){
    //get the location of the list we want to update also delete any current elements in the list.
    let $users = $('#datalist').empty();
    //make ajax call
    $.ajax({
        type:'GET',
        url:'http://localhost:4000/api/users',
        success: (users)=>{
             //foreach entry append the list
            $.each(users, (i, user)=>{
                //need to put a loop here to get more comments
                $users.append('<li>Post Title: '+'<b>'+user.posts[i].title+'</b>'+'<p>Comment Date: '+user.posts[i].comments[i].c_date+
                '</p>'+ '<p>'+'Comment Content: '+user.posts[i].comments[i].c_content+'</p>'+'</li>');
            });
    }});
};
function sendPost(){
    //get the data from makshift form
    let fname = document.getElementById("firstname").value;
    let lname = document.getElementById('lastname').value;
    let em = document.getElementById('email').value;
    let uname = document.getElementById('username').value;
    let pass = document.getElementById('password').value;
    //make post request to api with the relevant data
    $.ajax({
        type:"POST",
        url: "http://localhost:4000/api/users",
        data:{
            "firstname":fname,
            "lastname":lname,
            "email":em,
            "username":uname,
            "password":pass
        }, success: ()=>{
            alert("Sent to database")
        }
    });
};
//find user through search bar and username
function findUser(){
    //get name through the input
    let propUser = document.getElementById("finduser").value;
    //cache the location of the list we want to update also delete any current elements in the list.
    let $users = $('#datalist').empty();
    //append the userl with the username so it fits the api route
    let searchURL = 'http://localhost:4000/api/users/'+propUser;
    //make a call with the new api
    $.ajax({
        type:'GET',
        url:searchURL,
        success: (users)=>{
             //foreach entry append the list
            $.each(users, (i, user)=>{
                $users.append('<li>Name: '+'<b>'+user.firstname+' '+user.lastname+'</b>' +'<p>email: '+user.email+'</p>'+'Username: '+
                user.username+"<p>Password: "+user.password+'</p>'+'Creator: '+user.creator+'</li>');
            });
    }});

}
