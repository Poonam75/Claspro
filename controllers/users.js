var usersModel=require('../models/Users');



exports.getUsers=function(){
    return usersModel.users;
}

 
exports.getUser=function(id){
    for(var i=0; i<usersModel.userslength; i++)
    {
        if(usersModel.users[i].id==id)
            return usersModel.users[i];
    }
}
exports.compareAuth=function(username,password){
    for(var i=0; i<usersModel.users.length;i++)
    {
        if(usersModel.users[i].username==username && usersModel.users[i].password==password)
        {
        return usersModel.users[i];
           // return true;
        }

    }
     return false;
}
exports.postLogin= function(request, response){
        //var result=compareAuth(request.body.email,request.body.password);
    var result = true;
    if(result)
    {
        response.send("Login Scucessful. Hi "+result.name);
    }
    else
    {
        response.send("Failed");
    }

};