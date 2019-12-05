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


<<<<<<< HEAD
userModel.postedProperty = (userId) => {
    return dbModel.getPropertyCollection().then((data) => {
        return data.find({ "sellerId": userId }).then((model) => {
            if (model) {
                
                
                return model
            } else {
                let err = Error("User not found");
                err.status = 404;
                throw err;
=======
userModel.propertyDetails = () => {
    return dbModel.getPropertyCollection().then(model => {
        return model.find().then(data => {
            if (data.length == 0) {
                return null
            } else {
                console.log(data, 99);
                return data
>>>>>>> 823ce17b7ec8eaa8a480d5c5e7b20d0dd917beb5

            }
        })
    })
}
<<<<<<< HEAD
=======



>>>>>>> 823ce17b7ec8eaa8a480d5c5e7b20d0dd917beb5
module.exports = userModel;