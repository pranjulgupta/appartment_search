// const collection = require('../utilities/connection');

// const userDb = [
//     {
//         wishlist: ["P1001"],
//         name: "admin",
//         emailId: "admin@gmail.com",
//         contactNo: 1234567890,
//         city: "Mysore",
//         area: "Hebbal",
//         pincode: 123457,
//         password: "Admin@123",
//         userId: "U1001"
//     },
//     {
//         wishlist: ["P1001", "P1002"],
//         name: "user",
//         emailId: "user@gmail.com",
//         contactNo: 9874567890,
//         city: "Mysore",
//         area: "Hebbal",
//         pincode: 123457,
//         password: "User@123",
//         userId: "U1002"
//     }

// ]

// // role collection
// const roleDb =
// {
//     registeredUsers: ["U1002"],
//     buyers: ["U1002"],
//     sellers: ["U1001"]
// }
// //property Collection 
// const propertyDb = [
//     {
//         // ids
//         propertyId: "P1001",
//         sellerId: "U1001",
//         buyerId: "U1002",
//         pincode: 570001,
//         // features
//         propertyType: "Rent",
//         propertyOwnership: "Owner",
//         buildingType: "House",
//         noOfBathrooms: 2,
//         noOfBedrooms: 2,
//         noOfBalconies: 1,
//         furnishing: "Fully Furnished",
//         availability: "Ready to move",
//         // amenities
//         lifts: true,
//         ac: true,
//         heater: false,
//         maintenenceStaff: true,
//         visitorParking: true,
//         IntercomFacility: false,
//         wifi: true,
//         fireAlarm: false,
//         WaterPurifier: false,
//         PowerBackup: true,
//         // highlights
//         WaterSupplyFor24Hours: true,
//         CloseToSchool: true,
//         CloseToHospital: false,
//         CloseToRailwayStation: true,
//         CloseToBusStand: true,
//         CloseToAirport: false,
//         CloseToBank: true,
//         CloseToPark: false,
//         // other details
//         status: "Available",
//         Address: "196,12th Street",
//         price: 15000,
//         Advance: 50000,
//         transactionType: "New",
//         ageOfProperty: "1 year old property",
//         availabilityBy: "Within 2 weeks",
//         totalFloors: 10,
//         PropertyFloor: 5,
//         propertyArea: 1200,
//         poojaRoom: true,
//         servantRoonm: true,
//         noofCoveredParking: 1,
//         noOfOpenParking: 1,
//         description: "Recently renovated and restored. Upper Unit - 2 Bedrooms 2 Full Bathroom - New kitchen, appliances, bathroom and flooring - Kitchen appliances included: Refrigerator, Gas Oven/ Range, Dishwasher, Over the Range Microwave - Private Washer and Dryer - 2 driveway parking spaces - All Bedrooms have large closets - 2 minute walk from village center: Restaurants, cafes, shops, bars, festivals, farmers market - Tenant pays Gas and Electricity - Available Immediately - Sorry, no pets Tenant pays gas and electricity",
//         imageUrls: "../../../assets/house1.jpg",
//         extras: "Pets are not allowed"
//     },
//     {
//         // ids
//         propertyId: "P1002",
//         sellerId: "U1002",
//         buyerId: "U1001",
//         pincode: 570016,
//         // features
//         propertyType: "Sale",
//         propertyOwnership: "Owner",
//         buildingType: "House",
//         noOfBathrooms: 2,
//         noOfBedrooms: 3,
//         noOfBalconies: 2,
//         furnishing: "Fully Furnished",
//         availability: "Ready to move",
//         // amenities
//         lifts: true,
//         ac: true,
//         heater: false,
//         maintenenceStaff: true,
//         visitorParking: true,
//         IntercomFacility: false,
//         wifi: true,
//         fireAlarm: false,
//         WaterPurifier: false,
//         PowerBackup: true,
//         // highlights
//         WaterSupplyFor24Hours: true,
//         CloseToSchool: true,
//         CloseToHospital: false,
//         CloseToRailwayStation: true,
//         CloseToBusStand: true,
//         CloseToAirport: false,
//         CloseToBank: true,
//         CloseToPark: false,
//         // other details
//         status: "Available",
//         Address: "197,2nd Street",
//         price: 1200000,
//         Advance: 50000,
//         transactionType: "New",
//         ageOfProperty: "1 year old property",
//         availabilityBy: "Within 2 weeks",
//         totalFloors: 10,
//         PropertyFloor: 5,
//         propertyArea: 1800,
//         poojaRoom: true,
//         servantRoonm: true,
//         noofCoveredParking: 1,
//         noOfOpenParking: 1,
//         description: "Recently renovated and restored. Upper Unit - 2 Bedrooms 2 Full Bathroom - New kitchen, appliances, bathroom and flooring - Kitchen appliances included: Refrigerator, Gas Oven/ Range, Dishwasher, Over the Range Microwave - Private Washer and Dryer - 2 driveway parking spaces - All Bedrooms have large closets - 2 minute walk from village center: Restaurants, cafes, shops, bars, festivals, farmers market - Tenant pays Gas and Electricity - Available Immediately - Sorry, no pets Tenant pays gas and electricity",
//         imageUrls: "../../../assets/house2.jpg",
//         extras: "Pets are not allowed"
//     },
//     {
//         // ids
//         propertyId: "P1003",
//         sellerId: "U1001",
//         buyerId: "U1002",
//         pincode: 570016,
//         // features
//         propertyType: "Sale",
//         propertyOwnership: "Owner",
//         buildingType: "House",
//         noOfBathrooms: 2,
//         noOfBedrooms: 2,
//         noOfBalconies: 1,
//         furnishing: "Fully Furnished",
//         availability: "Ready to move",
//         // amenities
//         lifts: true,
//         ac: true,
//         heater: false,
//         maintenenceStaff: true,
//         visitorParking: true,
//         IntercomFacility: false,
//         wifi: true,
//         fireAlarm: false,
//         WaterPurifier: false,
//         PowerBackup: true,
//         // highlights
//         WaterSupplyFor24Hours: true,
//         CloseToSchool: true,
//         CloseToHospital: false,
//         CloseToRailwayStation: true,
//         CloseToBusStand: true,
//         CloseToAirport: false,
//         CloseToBank: true,
//         CloseToPark: false,
//         // other details
//         status: "Available",
//         Address: "19,4th Street",
//         price: 1200000,
//         Advance: 50000,
//         transactionType: "New",
//         ageOfProperty: "1 year old property",
//         availabilityBy: "Within 2 weeks",
//         totalFloors: 10,
//         PropertyFloor: 5,
//         propertyArea: 1000,
//         poojaRoom: true,
//         servantRoonm: true,
//         noofCoveredParking: 1,
//         noOfOpenParking: 1,
//         description: "Recently renovated and restored. Upper Unit - 2 Bedrooms 2 Full Bathroom - New kitchen, appliances, bathroom and flooring - Kitchen appliances included: Refrigerator, Gas Oven/ Range, Dishwasher, Over the Range Microwave - Private Washer and Dryer - 2 driveway parking spaces - All Bedrooms have large closets - 2 minute walk from village center: Restaurants, cafes, shops, bars, festivals, farmers market - Tenant pays Gas and Electricity - Available Immediately - Sorry, no pets Tenant pays gas and electricity",
//         imageUrls: "../../../assets/house3.jpeg",
//         extras: "Pets are not allowed"
//     },
//     {
//         // ids
//         propertyId: "P1004",
//         sellerId: "U1002",
//         buyerId: "U1001",
//         pincode: 570017,
//         // features
//         propertyType: "Rent",
//         propertyOwnership: "Owner",
//         buildingType: "House",
//         noOfBathrooms: 2,
//         noOfBedrooms: 2,
//         noOfBalconies: 1,
//         furnishing: "Fully Furnished",
//         availability: "Ready to move",
//         // amenities
//         lifts: true,
//         ac: true,
//         heater: false,
//         maintenenceStaff: true,
//         visitorParking: true,
//         IntercomFacility: false,
//         wifi: true,
//         fireAlarm: false,
//         WaterPurifier: false,
//         PowerBackup: true,
//         // highlights
//         WaterSupplyFor24Hours: true,
//         CloseToSchool: true,
//         CloseToHospital: false,
//         CloseToRailwayStation: true,
//         CloseToBusStand: true,
//         CloseToAirport: false,
//         CloseToBank: true,
//         CloseToPark: false,
//         // other details
//         status: "Available",
//         Address: "19,8th Street",
//         price: 8000,
//         Advance: 50000,
//         transactionType: "New",
//         ageOfProperty: "1 year old property",
//         availabilityBy: "Within 2 weeks",
//         totalFloors: 10,
//         PropertyFloor: 5,
//         propertyArea: 1000,
//         poojaRoom: true,
//         servantRoonm: true,
//         noofCoveredParking: 1,
//         noOfOpenParking: 1,
//         description: "Recently renovated and restored. Upper Unit - 2 Bedrooms 2 Full Bathroom - New kitchen, appliances, bathroom and flooring - Kitchen appliances included: Refrigerator, Gas Oven/ Range, Dishwasher, Over the Range Microwave - Private Washer and Dryer - 2 driveway parking spaces - All Bedrooms have large closets - 2 minute walk from village center: Restaurants, cafes, shops, bars, festivals, farmers market - Tenant pays Gas and Electricity - Available Immediately - Sorry, no pets Tenant pays gas and electricity",
//         imageUrls: "../../../assets/house4.jpg",
//         extras: "Pets are not allowed"
//     },
//     {
//         // ids
//         propertyId: "P1005",
//         sellerId: "U1001",
//         buyerId: "U1002",
//         pincode: 570017,
//         // features
//         propertyType: "Rent",
//         propertyOwnership: "Owner",
//         buildingType: "House",
//         noOfBathrooms: 1,
//         noOfBedrooms: 2,
//         noOfBalconies: 1,
//         furnishing: "Fully Furnished",
//         availability: "Ready to move",
//         // amenities
//         lifts: true,
//         ac: true,
//         heater: false,
//         maintenenceStaff: true,
//         visitorParking: true,
//         IntercomFacility: false,
//         wifi: true,
//         fireAlarm: false,
//         WaterPurifier: false,
//         PowerBackup: true,
//         // highlights
//         WaterSupplyFor24Hours: true,
//         CloseToSchool: true,
//         CloseToHospital: false,
//         CloseToRailwayStation: true,
//         CloseToBusStand: true,
//         CloseToAirport: false,
//         CloseToBank: true,
//         CloseToPark: false,
//         // other details
//         status: "Available",
//         Address: "196,12th Street",
//         price: 9000,
//         Advance: 30000,
//         transactionType: "New",
//         ageOfProperty: "1 year old property",
//         availabilityBy: "Within 2 weeks",
//         totalFloors: 10,
//         PropertyFloor: 5,
//         propertyArea: 900,
//         poojaRoom: true,
//         servantRoonm: true,
//         noofCoveredParking: 1,
//         noOfOpenParking: 1,
//         description: "Recently renovated and restored. Upper Unit - 2 Bedrooms 2 Full Bathroom - New kitchen, appliances, bathroom and flooring - Kitchen appliances included: Refrigerator, Gas Oven/ Range, Dishwasher, Over the Range Microwave - Private Washer and Dryer - 2 driveway parking spaces - All Bedrooms have large closets - 2 minute walk from village center: Restaurants, cafes, shops, bars, festivals, farmers market - Tenant pays Gas and Electricity - Available Immediately - Sorry, no pets Tenant pays gas and electricity",
//         imageUrls: "../../../assets/house5.jpg",
//         extras: "Pets are not allowed"
//     },
//     {
//         // ids
//         propertyId: "P1006",
//         sellerId: "U1002",
//         buyerId: "U1001",
//         pincode: 570017,
//         // features
//         propertyType: "Sale",
//         propertyOwnership: "Owner",
//         buildingType: "House",
//         noOfBathrooms: 2,
//         noOfBedrooms: 2,
//         noOfBalconies: 1,
//         furnishing: "Fully Furnished",
//         availability: "Ready to move",
//         // amenities
//         lifts: true,
//         ac: true,
//         heater: false,
//         maintenenceStaff: true,
//         visitorParking: true,
//         IntercomFacility: false,
//         wifi: true,
//         fireAlarm: false,
//         WaterPurifier: false,
//         PowerBackup: true,
//         // highlights
//         WaterSupplyFor24Hours: true,
//         CloseToSchool: true,
//         CloseToHospital: false,
//         CloseToRailwayStation: true,
//         CloseToBusStand: true,
//         CloseToAirport: false,
//         CloseToBank: true,
//         CloseToPark: false,
//         // other details
//         status: "Available",
//         Address: "196,12th Street",
//         price: 120000,
//         Advance: 50000,
//         transactionType: "New",
//         ageOfProperty: "1 year old property",
//         availabilityBy: "Within 2 weeks",
//         totalFloors: 10,
//         PropertyFloor: 5,
//         propertyArea: 1000,
//         poojaRoom: true,
//         servantRoonm: true,
//         noofCoveredParking: 1,
//         noOfOpenParking: 1,
//         description: "Recently renovated and restored. Upper Unit - 2 Bedrooms 2 Full Bathroom - New kitchen, appliances, bathroom and flooring - Kitchen appliances included: Refrigerator, Gas Oven/ Range, Dishwasher, Over the Range Microwave - Private Washer and Dryer - 2 driveway parking spaces - All Bedrooms have large closets - 2 minute walk from village center: Restaurants, cafes, shops, bars, festivals, farmers market - Tenant pays Gas and Electricity - Available Immediately - Sorry, no pets Tenant pays gas and electricity",
//         imageUrls: "../../../assets/house6.jpg",
//         extras: "Pets are not allowed"
//     }
// ]
// //location Collection
// const locationDb = [
//     {
//         "propertyIds": ["P1001", "P1002"],
//         "pincode": 570001,
//         "area": "Mandimohalla",
//         "city": "Mysore",
//         "state": "KARNATAKA"
//     },
//     {
//         "propertyIds": ["P1002"],
//         "pincode": 570001,
//         "area": "Krishna Rajendra Circle",
//         "city": "Mysore",
//         "state": "KARNATAKA"
//     },
//     {
//         "pincode": 570001,
//         "area": "Mysore",
//         "city": "Mysore",
//         "state": "KARNATAKA"
//     },
//     {
//         "pincode": 570002,
//         "area": "Vani Vilas Mohalla",
//         "city": "Mysore",
//         "state": "KARNATAKA"
//     }
// ]

// exports.setupDb = () => {
//     return collection.getUserCollection().then((user) => {
//         return user.deleteMany().then(() => {
//             return user.insertMany(userDb).then((data) => {
//                 if (data) {
//                     return collection.getLocationCollection().then((location) => {
//                         return location.deleteMany().then(() => {
//                             return location.insertMany(locationDb).then((data) => {
//                                 if (data) {
//                                     return collection.getPropertyCollection().then((property) => {
//                                         return property.deleteMany().then(() => {
//                                             return property.insertMany(propertyDb).then((data) => {
//                                                 if (data) {
//                                                     return collection.getRoleCollection().then((role) => {
//                                                         return property.deleteMany().then(() => {
//                                                             return role.insertMany(roleDb).then((data) => {
//                                                                 if (data) {
//                                                                     return collection.getFeaturesCollection().then((feature) => {
//                                                                         return feature.deleteMany().then(() => {
//                                                                             return feature.insertMany(featureDb).then((data) => {
//                                                                                 if (data) {
//                                                                                     return "Insertion Successfull"
//                                                                                 }
//                                                                                 else {
//                                                                                     let err = new Error("Insertion Failed");
//                                                                                     err.status = 500;
//                                                                                     throw err;
//                                                                                 }
//                                                                             })

//                                                                         })
//                                                                     })
//                                                                 } else {
//                                                                     let err = new Error("Insertion Failed");
//                                                                     err.status = 500;
//                                                                     throw err;
//                                                                 }
//                                                             })

//                                                         })
//                                                     })
//                                                 } else {
//                                                     let err = new Error("Insertion Failed");
//                                                     err.status = 500;
//                                                     throw err;
//                                                 }
//                                             })
//                                         })

//                                     })
//                                 } else {
//                                     let err = new Error("Insertion Failed");
//                                     err.status = 500;
//                                     throw err;
//                                 }
//                             })
//                         })


//                     })
//                 } else {
//                     let err = new Error("Insertion Failed");
//                     err.status = 500;
//                     throw err;
//                 }

//             })
//         })
//     })
// }






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