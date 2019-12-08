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





hUserService.locationProp=()=>{
    return userdb.loc().then(data=>{
        if(data){
            return data;
        }else{
            let err = new Error("Location cannot be fetched");
            err.status = 404;
            throw err;
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

hUserService.getViewDetails=(id)=>{
    return userdb.viewDetails(id).then((data)=>{
        if(data){
            console.log(data,2222)
            return data;
        }
        else{
            let err = new Error("Error in fetching View Details");
                err.status = 404;
                throw err;

        }
    })
}


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

hUserService.addProperty = (dataObj) => {
    console.log('g')
    return userdb.generatePropertyId().then(id => {
        if (id) {
            console.log('h')
            dataObj.propertyId = id;
            return userdb.addProperty(dataObj).then(modelRes => {
                if (modelRes) {
                    return modelRes
                } else {
                    let err = new Error("Property cannot be added! Try Again.")
                    err.status = 404;
                    throw err;
                }
            })
        }else{
            console.log('v')
            let err = new Error("Property cannot be added! Try Again.")
                    err.status = 404;
                    throw err;
        }
    })
}


//to get the wishlist
hUserService.getWishList=(userId)=>{
    return userdb.searchUser(userId).then(data=>{
        if(data){
            return data;
        }else{
            let err = new Error("Your wishlist is empty.!!");
            err.status = 404;
            throw err;
        }
    })
}

//to add the wishlist
hUserService.addWishList=(userId,propertyId)=>{
    return userdb.insertWishList(userId,propertyId).then(data=>{
        if(data){
            return data;
        }else{
            let err = new Error("Unable to add the data in wishlist.!!");
            err.status = 404;
            throw err;
        }
    })
}

//to delete from the wishlist
hUserService.deleteWishList=(userId,propertyId)=>{
    return userdb.deleteFromWishList(userId,propertyId).then(data=>{
        if(data){
            return data;
        }else{
            let err = new Error("Unable to delete the data from wishlist.!!");
            err.status = 404;
            throw err;
        }
    })
}


//admin
hUserService.registeredUser=()=>{
    return userdb.regUser().then(regData=>{
        if(regData){
            return regData
        }else{
            let err = new Error("User cannot be fetched");
            err.status = 404;
            throw err;
        }
    })
}

//admin
hUserService.deleteUser=(Id)=>{
    return userdb.delUser(Id).then(delData=>{
        if(delData){
            return delData;
        }else{
            let err = new Error("User cannot be deleted");
            err.status = 404;
            throw err;
        }
    })
}

//admin
hUserService.buyerUser=()=>{
    return userdb.buyerView().then(buyData=>{
        if(buyData){
            return buyData;
        }else{
            let err = new Error("BuyerData cannot be fetched");
            err.status = 404;
            throw err;
        }
    })
}

//admin
hUserService.sellerUser=()=>{
    return userdb.sellerView().then(sellData=>{
        if(sellData){
            return sellData;
        }else{
            let err = new Error("SellerData cannot be fetched");
            err.status = 404;
            throw err;
        }
    })
}

//admin
hUserService.propDetails=()=>{
    return userdb.propertyView().then(propData=>{
        if(propData==null){
            let err = new Error("Property Details cannot be fetched");
            err.status = 404;
            throw err;
        }else{
            return propData;
        }
    })
}

//admin
hUserService.deleteProperty=(propId)=>{
    return userdb.delProp(propId).then(delData=>{
        if(delData==null){
            let err = new Error("Property cannot be deleted");
            err.status = 500;
            throw err;
        }else{
            return delData;
        }
    })
}



module.exports = hUserService;