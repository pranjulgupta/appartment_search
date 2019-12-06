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

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 7a0595a798337af44595709cffa82a2623ef90b3
userModel.viewDetails = (id) => {
    return dbModel.getPropertyCollection().then(model => {

        return model.findOne({ "propertyId": id }).then((data) => {

            if (data) {
                return data;
            } else {
                let err = Error("Property not found");
                err.status = 404;
<<<<<<< HEAD
                throw err;  
             }
            })
        })
    }

=======
                throw err;
=======
>>>>>>> d63ce707cc0d192d59209866ec8c6934c0b9bd08
>>>>>>> 7a0595a798337af44595709cffa82a2623ef90b3

userModel.addUser= (UserObj)=>{
    return dbModel.getUserCollection().then(model=>{
        return model.create(UserObj).then(userData=>{
            if(userData.length==0){
                return null;
            }else{
                return userData;
                
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 6e0ddb98d3fd2e039341dd7e50a1ab5495456d60
>>>>>>> d63ce707cc0d192d59209866ec8c6934c0b9bd08
>>>>>>> 7a0595a798337af44595709cffa82a2623ef90b3
            }
        })
    })
}
<<<<<<< HEAD




=======
<<<<<<< HEAD



=======
<<<<<<< HEAD
=======



>>>>>>> 6e0ddb98d3fd2e039341dd7e50a1ab5495456d60
>>>>>>> d63ce707cc0d192d59209866ec8c6934c0b9bd08
>>>>>>> 7a0595a798337af44595709cffa82a2623ef90b3
//profile comp
userModel.viewProfile = (emailid) => {
    console.log(emailid, 11);

    return dbModel.getUserCollection().then((data) => {
        console.log(data)
        return data.findOne({ "emailId": emailid }, { _id: 0, name: 1, emailId: 1, contactNo: 1 }).then((data1) => {
            console.log(data1);

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
userModel.delUser=(Id)=>{
    return dbModel.getUserCollection().then(model=>{
        return model.deleteOne({userId:Id}).then(delData=>{
            if(delData.deletedCount>0){
                return Id;
            }else{
                return null;
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
                console.log(data, 99);
                return data
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
<<<<<<< HEAD

//admin
userModel.propertyView=()=>{
    return dbModel.getPropertyCollection().then(model=>{
        return model.find({},{_id:0,propertyId:1,sellerId:1,buyerId:1}).then(propdata=>{
            if(propdata.length==0){
                return null;
            }else{
                return propdata;
=======

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

//admin
userModel.delProp=(propId)=>{
    return dbModel.getPropertyCollection().then(model=>{
        return model.deleteOne({propertyId:propId}).then(delData=>{
            if(delData.deletedCount>0){
                return propId;
            }else{
                return null;
>>>>>>> d63ce707cc0d192d59209866ec8c6934c0b9bd08
            }
        })
    })
}

<<<<<<< HEAD
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
                return propId;
            }else{
                return null;
=======
//search
userModel.loc=()=>{
    return dbModel.getLocationCollection().then(model=>{
        return model.find().then(data=>{
            if (data.length == 0) {
                return null
            } else {
                console.log(data, 99);
                return data
>>>>>>> d63ce707cc0d192d59209866ec8c6934c0b9bd08
            }
        })
    })
}

userModel.addProperty = (data) => {
    console.log('k')
    return dbModel.getPropertyCollection().then( model => {
        console.log('l')
        console.log(data)
        return model.create(data).then(response => {
            console.log('w')
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
                console.log(data, 99);
                return data
            }
        })
    })
}
       
            

module.exports = userModel;
