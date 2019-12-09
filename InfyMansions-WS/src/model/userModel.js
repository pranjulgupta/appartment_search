const dbModel = require('../utilities/connection');
const userModel = {}
//To generate userId for new User
userModel.generateId = () => {
    return dbModel.getUserCollection().then((userModel) => {
        return userModel.distinct("userId").then((ids) => {
            let idarr = ids.map((data) => { return Number(data.slice(1)) })
            let bId = Math.max(...idarr);
            return "U" + (bId + 1);
        })
    })
}
//To check whether the user with conatctNo or emailId exist or not
userModel.findUser = (emailId) => {
    return dbModel.getUserCollection().then(model => {

        return model.findOne({ "emailId": emailId }).then((userData) => {

            if (userData === null) {
                return null;
            } else {
                return userData;
            }
        })
    })
}
//To find the user data
userModel.searchUser = (userId) => {
    return dbModel.getUserCollection().then(model => {
        return model.findOne({ "userId": userId }, { wishlist: 1, _id: 0 }).then((userData) => {
            // console.log("in model length",userData.wishlist.length)
            if (userData.wishlist.length < 1) {
                return null
            } else {
                return userData.wishlist;
            }
        })
    })
}

//View
userModel.viewDetails = (id) => {
    return dbModel.getPropertyCollection().then(model => {

        return model.findOne({ "propertyId": id }).then((data) => {

            if (data) {
                return data;
            } else {
                let err = Error("Property not found");
                err.status = 404;
                throw err;  
             }
            })
        })
    }



userModel.addUser= (UserObj)=>{
    return dbModel.getUserCollection().then(model=>{
        return model.create(UserObj).then(userData=>{
            if(userData.length==0){
                return null;
            }else{
                return userData;
            }
        })
    })
}
                

//to valuest values from user's wishlist
userModel.deleteFromWishList = (userId,propertyId) => {
    return dbModel.getUserCollection().then(model => {
        return model.updateOne({userId:userid},{$pull:{wishlist:propertyId}}).then(updatedData => {
            if (updatedData.nModified == 1) {
                return propertyId;
            } else {
                // console.log(data, 91);
                return null
            }
        })
    })
}





//profile comp
userModel.viewProfile = (emailid) => {
    // console.log(emailid, 11);

    return dbModel.getUserCollection().then((data) => {
        // console.log(data)
        return data.findOne({ "emailId": emailid }, { _id: 0, name: 1, emailId: 1, contactNo: 1 }).then((data1) => {
            // console.log(data1);

            if (data1) {
                return data1;
            } else {
                let err = Error("User not found");
                err.status = 404;
                throw err;

            }
        })
    })
}

userModel.postedProperty=(userid)=>{
    return dbModel.getPropertyCollection().then(model=>{
        return model.find({"sellerId":userid}).then((data)=>{
            // console.log(userid,"sur")
            if(data){
                // console.log(data,"sur");
                return data
                
            }else{
                let err = Error("User not found");
                err.status = 404;
                throw err; 
            }
        })
    })
}
//starwishlist
userModel.wishlistProperty=(userid)=>{
    return dbModel.getUserCollection().then(model=>{
        return model.find({"userId":userid}).then((data)=>{
            // // // console.log(userid,"wish")
            if(data){
                // console.log(data,"wish");
                return data
                
            }else{
                let err = Error("User not found");
                err.status = 404;
                throw err; 
            }
        })
    })
}
userModel.getOwnerDetails=(userid)=>{
    // console.log(userid,"dana")
    return dbModel.getUserCollection().then(model=>{
        return model.find({"userId":userid}).then((data)=>{
            // console.log(userid,"danr")
            if(data){
                // console.log(data,"dan");
                return data
                
            }else{
                let err = Error("Owner not found");
                err.status = 404;
                throw err; 
            }
        })
    })
}

//buy            
userModel.Propertywish=(userid)=>{
    return dbModel.getPropertyCollection().then(model=>{
        return model.find({"propertyId":propertyId}).then((data)=>{
            
            if(data){
                
                return data
                
            }else{
                let err = Error("User not found");
                err.status = 404;
                throw err; 
            }
        })
    })
}


userModel.propertyDetails = () => {
    return dbModel.getPropertyCollection().then(model => {
        return model.find().then(data => {
            if (data.length == 0) {
                return null
            } else {
                // console.log(data, 9);
                return data
            }
        })
    })
}


//to insert values in wishlist
userModel.insertWishList = (userId,propertyId) => {
    return dbModel.getUserCollection().then(model => {
        return model.updateOne({userId:userId},{$push:{wishlist:propertyId}}).then(updatedData => {
            if (updatedData.nModified == 1) {
                return propertyId;
            } else {
                return null;
            }
        })
    })
}


userModel.generatePropertyId = () => {
    return dbModel.getPropertyCollection().then((userModel) => {
        return userModel.distinct("propertyId").then((ids) => {
            let idarr = ids.map((data) => { 
            return Number(data.slice(1)) })
            let bId = Math.max(...idarr);
            return "P" + (bId + 1);
        })
    })
}



//search
userModel.loc=()=>{
    return dbModel.getLocationCollection().then(model=>{
        return model.find().then(data=>{
            if (data.length == 0) {
                return null
            } else {
                // console.log(data, 99);
                return data
            }
        })
    })
}


//to valuest values from user's wishlist
                userModel.deleteFromWishList = (userId, propertyId) => {
                    return dbModel.getUserCollection().then(model => {
                        return model.updateOne({ userId: userId }, { $pull: { wishlist: propertyId } }).then(updatedData => {
                            if (updatedData.nModified == 1) {
                                return propertyId;
                            }
                            else {
                                // console.log(data, 91);
                                return null
                            }
                        })
                    })
                }

userModel.addProperty = (data) => {
    // console.log('k')
    return dbModel.getPropertyCollection().then( model => {
        // console.log('l')
        // console.log(data)
        return model.create(data).then(response => {
            // console.log('w')
            if(response){
                return response
            }else{
                return null
            }
        })
    })
}

     
//search
userModel.loc=()=>{
    return dbModel.getLocationCollection().then(model=>{
        return model.find().then(data=>{
            if (data.length == 0) {
                return null
            } else {
                // console.log(data, 99);
                return data
            }
        })
    })
}

// #############################################################################
//admin
userModel.regUser=()=>{
    return dbModel.getUserCollection().then(model=>{
        return model.find({},{_id:0,userId:1,name:1,contactNo:1}).then((regData)=>{
            if(regData.length==0){
                return null;
            }else{
                return regData;
            }
        })
    })
}

//admin
userModel.delUser=(userId)=>{
    return dbModel.getUserCollection().then(umodel=>{
        return umodel.deleteOne({userId:userId}).then(delData=>{
            if(delData.deletedCount==1){
                return dbModel.getRoleCollection().then(rmodel=>{
                    return rmodel.updateOne({$pull:{registeredUsers:userId}}).then(delRole=>{
                        if(delRole.nModified==1){
                            return dbModel.getPropertyCollection().then(pmodel=>{
                                return pmodel.deleteMany({sellerId:userId}).then(delprop=>{
                                    return userId;
                                })
                            })
                        }else{
                            return null;
                        }
                    })
                })
            }else{
                return null;
            }
        })
    })
}
//admin
userModel.buyerView=()=>{
    return dbModel.getRoleCollection().then(model=>{
        return model.findOne({},{buyers:1,_id:0}).then(buyerData=>{
            return dbModel.getUserCollection().then(umodel=>{
                return umodel.find({userId:{$in:buyerData.buyers}}).then(userData=>{
                    if(userData.length>0){
                        return userData;
                    }else{
                        return null;
                    }
                })
            })
        })
    })
}

//admin
userModel.sellerView=()=>{
    return dbModel.getRoleCollection().then(model=>{
        return model.findOne({},{sellers:1,_id:0}).then(sellerData=>{
            return dbModel.getUserCollection().then(umodel=>{
                return umodel.find({userId:{$in:sellerData.sellers}}).then(userData=>{
                    if(userData.length>0){
                        return userData;
                    }else{
                        return null;
                    }
                })
            })
        })
    })
}

//admin
userModel.propertyView=()=>{
    return dbModel.getPropertyCollection().then(model=>{
        return model.find({},{_id:0,propertyId:1,sellerId:1,buyerId:1}).then(propdata=>{
            if(propdata.length==0){
                return null;
            }else{
                return propdata;
            }
        })
    })
}


userModel.generatePropertyId = () => {
    return dbModel.getPropertyCollection().then((userModel) => {
        return userModel.distinct("propertyId").then((ids) => {
            let idarr = ids.map((data) => { 
            return Number(data.slice(1)) })
            let bId = Math.max(...idarr);
            return "P" + (bId + 1);
        })
    })
}





//admin
userModel.delProp=(propId)=>{
    return dbModel.getPropertyCollection().then(model=>{
        return model.deleteOne({propertyId:propId}).then(delData=>{
            if(delData.deletedCount>0){
                // console.log("h")
                return delData;
            }else{
                // console.log("i")
                return null;
            }
        })
    })
}

userModel.addProperty = (data) => {
    // console.log('k')
    return dbModel.getPropertyCollection().then( model => {
        // console.log('l')
        // console.log(data)
        return model.create(data).then(response => {
            // console.log('w')
            if(response){
                return response
            }else{
                return null
            }
        })
    })
}

     
//search
userModel.loc=()=>{
    return dbModel.getLocationCollection().then(model=>{
        return model.find().then(data=>{
            if (data.length == 0) {
                return null
            } else {
                // console.log(data, 99);
                return data
            }
        })
    })
}
       
            

module.exports = userModel;
