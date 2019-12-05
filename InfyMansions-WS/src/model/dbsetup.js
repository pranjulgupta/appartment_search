const collection = require('../utilities/connection');

const userDb = [
    {
        wishlist: ["P1001"],
        name: "admin",
        emailId: "admin@gmail.com",
        contactNo: 1234567890,
        city: "Mysore",
        area: "Hebbal",
        pincode: 123457,
        password: "Admin@123",
        userId: "U1001"
    },
    {
        wishlist: ["P1001", "P1002"],
        name: "user",
        emailId: "user@gmail.com",
        contactNo: 9874567890,
        city: "Mysore",
        area: "Hebbal",
        pincode: 123457,
        password: "User@123",
        userId: "U1002"
    }

]
const locationDb=[]
const featureDb = []
const roleDb =[]
const propertyDb = [
       

    {
    propertyId:"P1001",
    sellerId: "U1002",
    buyerId: "U1010",
    pincode: 686692,
    noOfBedrooms: 3,
    propertyType: "For Sale" ,
    furnishing: "Fully Furnished",
    availability: "Ready to move",
    area: "2000 SQ FT",
    price: 1500000,
    lifts: true,
    ac: true,
    heater: true,
    maintenenceStaff: true,
    visitorParking: true,
},{
    propertyId:"P1002",
    sellerId: "U1002",
    buyerId: "U1003",
    pincode: 686693,
    noOfBedrooms: 4,
    propertyType: "For Rent" ,
    furnishing: "Fully Furnished",
    availability: "Ready to move",
    area:"1500 SQ FT",
    price: 8000,
    lifts: true,
    ac: true,
    heater: true,
    maintenenceStaff: true,
    visitorParking: true,
},
{
    propertyId:"P1003",
    sellerId: "U1004",
    buyerId: "U1005",
    pincode: 686694,
    noOfBedrooms: 2,
    propertyType: "For Sale" ,
    furnishing: "Fully Furnished",
    availability: "Under  Construction",
    area: "1800SQ.FT",
    price: 1200000,
    lifts: true,
    ac: true,
    heater: true,
    maintenenceStaff: true,
    visitorParking: true
}]




exports.setupDb = () => {
    // return collection.getUserCollection().then((user) => {
    //     return user.deleteMany().then(() => {
    //         return user.insertMany(userDb).then((data) => {
    //             if (data) {
    //                 return collection.getLocationCollection().then((location) => {
    //                     return location.deleteMany().then(() => {
    //                         return location.insertMany(locationDb).then((data) => {
    //                             if (data) {
    //                                 return collection.getPropertyCollection().then((property) => {
    //                                     return property.deleteMany().then(() => {
    //                                         return property.insertMany(propertyDb).then((data) => {
    //                                             if (data) {
    //                                                 console.log(data);
    //                                                 return collection.getRoleCollection().then((role) => {
    //                                                     return property.deleteMany().then(() => {
    //                                                         return role.insertMany(roleDb).then((data) => {
    //                                                             if (data) {
    //                                                                 return collection.getFeaturesCollection().then((feature) => {
    //                                                                     return feature.deleteMany().then(() => {
    //                                                                         return feature.insertMany(featureDb).then((data) => {
    //                                                                             if (data) {
    //                                                                                 return "Insertion Successfull"
    //                                                                             }
    //                                                                             else {
    //                                                                                 let err = new Error("Insertion Failed");
    //                                                                                 err.status = 500;
    //                                                                                 throw err;
    //                                                                             }
    //                                                                         })

    //                                                                     })
    //                                                                 })
    //                                                             } else {
    //                                                                 let err = new Error("Insertion Failed");
    //                                                                 err.status = 500;
    //                                                                 throw err;
    //                                                             }
    //                                                         })

    //                                                     })
    //                                                 })
    //                                             } else {
    //                                                 let err = new Error("Insertion Failed");
    //                                                 err.status = 500;
    //                                                 throw err;
    //                                             }
    //                                         })
    //                                     })

    //                                 })
    //                             } else {
    //                                 let err = new Error("Insertion Failed");
    //                                 err.status = 500;
    //                                 throw err;
    //                             }
    //                         })
    //                     })


    //                 })
    //             } else {
    //                 let err = new Error("Insertion Failed");
    //                 err.status = 500;
    //                 throw err;
    //             }

    //         })
    //     })
    // })

    return collection.getPropertyCollection().then((property) => {
        return property.deleteMany().then(() => {
            return property.insertMany(propertyDb).then((data) => {
                if (data) {
                    return collection.getUserCollection().then((user) => {
                        return user.deleteMany().then(() => {
                            return user.insertMany(userDb).then((data) => {
                                if (data) {
                                    return "Insertion Successfull"
                                }
                                else {
                                    let err = new Error("Insertion Failed");
                                    err.status = 500;
                                    throw err;
                                }
                            })
                        })
                    })
                }
                else {
                    let err = new Error("Insertion Failed");
                    err.status = 500;
                    throw err;
                }
            })
        })
    })

}