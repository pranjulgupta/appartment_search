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
// hUserService.showProperty=()=>{
//     return userdb.findProperty().then(object=>{
//         if(object==null){
//             let err= new Error("");
//             err.status=404;
//             throw err;
//         }else{
//             return object
//         }
//     })
// }

hUserService.getPropertyDetails=()=>{
    return userdb.propertyDetails().then(data=>{
        console.log(data,33);
        if(data.length==0){
            console.log(44);
            let err = new Error("Error in fetching Properties");
                err.status = 404;
                throw err;
        }
        else{
            console.log(data,55);
            return data
        }
    })
}
module.exports = hUserService;