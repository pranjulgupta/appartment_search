const { Schema } = require("mongoose");
const Mongoose = require("mongoose")
Mongoose.Promise = global.Promise;
Mongoose.set('useCreateIndex', true)
const url = "mongodb://localhost:27017/InfyMansions_DB";
collection={}
const userSchema = Schema({
    userId: String,
    name: String,
    emailId: String,
    contactNo: Number,
    city: String,
    area: String,
    pincode: Number,
    password: String,
    wishlist: []
}, { collection: "User" });

const roleSchema = Schema({
    
        registeredUsers: [],
        buyers: [],
        sellers: []
    }, { collection: "Role"});

const featuresSchema = Schema({

    propertyType: String,
    propertyOwnership: String,
    buildingType: String,
    noOfBathrooms: Number,
    noOfBedrooms: Number,
    noOfBalconies:Number,
    furnishingType: String,
    availability: String,
    
}, { collection: "Features"});

const propertySchema = Schema({
    propertyId: String,
    sellerId: String,
    buyerId: String,
    pincode: Number,
    area: String,
    price: Number,
    lifts: Boolean,
    noOfBedrooms: Number,
    propertyType: String,
    furnishing: String,
    availability: String,
        ac: Boolean,
        heater: Boolean,
        maintenenceStaff: Boolean,
        visitorParking: Boolean,
        IntercomFacility: Boolean,
        wifi: Boolean,
        fireAlarm: Boolean,
        WaterPurifier: Boolean,
        PowerBackup: Boolean,
        // highlights
        WaterSupplyFor24Hours: Boolean,
        CloseToSchool: Boolean,
        CloseToHospital: Boolean,
        CloseToRailwayStation: Boolean,
        CloseToBusStand: Boolean,
        CloseToAirport: Boolean,
        CloseToBank: Boolean,
        CloseToPark: Boolean,
        // other details
        status: String,
        Address: String,
        price: Number,
        Advance: Number,
        transactionType: String,
        ageOfProperty: String,
        availabilityBy:String,
        totalFloors: Number,
        PropertyFloor: Number,
        propertyArea: Number,
        poojaRoom: Boolean,
        servantRoonm: Boolean,
        noofCoveredParking: Number,
        noOfOpenParking: Number,
        description: String,
        imageUrls: String,
        extras: String
    }, { collection: "Property"});
    const locationSchema = Schema({

        "propertyIds": [],
        "pincode": Number,
        "area": String,
        "city": String,
        "state": String
    }, { collection: "Location"});


collection.getUserCollection = () => {
    return Mongoose.connect(url, { useNewUrlParser: true }).then((database) => {
        return database.model('User', userSchema)
    }).catch(() => {
        let err = new Error("Could not connect to Database");
        err.status = 500;
        throw err;
    })
}
console.log(collection.getUserCollection())

collection.getLocationCollection = () => {
    return Mongoose.connect(url, { useNewUrlParser: true }).then((database) => {
        return database.model('Location', locationSchema)
    }).catch(() => {
        let err = new Error("Could not connect to Database");
        err.status = 500;
        throw err;
    })
}

collection.getRoleCollection = () => {
    return Mongoose.connect(url, { useNewUrlParser: true }).then((database) => {
        return database.model('Role', roleSchema)
    }).catch(() => {
        let err = new Error("Could not connect to Database");
        err.status = 500;
        throw err;
    })
}

collection.getFeaturesCollection = () => {
    return Mongoose.connect(url, { useNewUrlParser: true }).then((database) => {
        return database.model('Features', featuresSchema)
    }).catch(() => {
        let err = new Error("Could not connect to Database");
        err.status = 500;
        throw err;
    })
}

collection.getPropertyCollection = () => {
    return Mongoose.connect(url, { useNewUrlParser: true }).then((database) => {
        return database.model('Property', propertySchema)
    }).catch(() => {
        let err = new Error("Could not connect to Database");
        err.status = 500;
        throw err;
    })
}

module.exports = collection;