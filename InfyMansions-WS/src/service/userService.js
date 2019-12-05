const userdb = require('../model/userModel');
let hUserService = {}
//To check whether the user registered if so, then allow him/her to login
hUserService.checkUser = (emailId, password) => {
    return userdb.findUser(emailId).then(userData => {

        if (userData == null) {
            let err = new Error("user not available!! Please register");
            err.status = 404;
            throw err;
        } else {
            if (userData.emailId === emailId) {
                if (userData.password === password)
                    return userData;
                else {
                    let err = new Error("Password is Incorrect");
                    err.status = 404;
                    throw err;
                }
            }
            else {
                let err = new Error("Authentication failed");
                err.status = 404;
                throw err;
            }

        }
    })
}

//To check while registering that whether the login credential already exist or not.If not allow him/her to register
hUserService.addDetails = (UserObj) => {

    return userdb.findUser(UserObj.contactNo, UserObj.emailId).then(object => {
        {
            if (object != null) {
                let err = new Error("user already exists with this emailId and contact Number");
                err.status = 404;
                throw err;
            } else {
                return userdb.generateId().then((data) => {
                    UserObj.userId = data;

                    return userdb.addUser(UserObj).then((data) => {
                        if (data) {
                            return data;
                        }
                        else {
                            return null;
                        }
                    })
                })
            }
        }
    })

}
//PROFILE COMPONENT
hUserService.getProfile=(emailid)=>{
    // console.log(emailid,6);
    
    return userdb.viewProfile(emailid).then((data)=>{
        if(data){
            console.log(data,1);
            
            return data
        }
        else{
            let err=Error("No User");
            err.status=404;
            throw err;
        }
    })
}

hUserService.getProperty=(userid)=>{
    return userdb.postedProperty(userid).then(res=>{
        if(res){
            console.log(res)
            return res
        }else{
            let err=Error("No User");
            err.status=404;
            throw err;
        }
    })
}
module.exports = hUserService;