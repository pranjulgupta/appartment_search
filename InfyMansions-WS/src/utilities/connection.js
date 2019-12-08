const { Schema } = require("mongoose");
const Mongoose = require("mongoose")
Mongoose.Promise = global.Promise;
Mongoose.set('useCreateIndex', true)
const url = "mongodb://localhost:27017/InfyMansions_DB";
collection={}
const userSchema = Schema({
    userId:{
        required: [true, 'This field is Required'],
        type: String,
        unique:true
    },
    name:{
        required: [true, 'This field is Required'],
        type: String
    },
    emailId:{
        required: [true, 'This field is Required'],
        type: String,
        unique:true,
        match:[/^[A-Za-z].+@[A-Za-z]{2,}[.][a-zA-Z]{2,}$/,"Enter a valid Email Id"]
    },
    contactNo:{
        required: [true, 'This field is Required'],
        type: Number,
        validate:[(contactNo)=>String(contactNo).length==10,'Contact No should have 10 digits only']
    },
    city: {
        type: String,
        match:[/^[A-Za-z]{3,}$/,'City must have only characters and must have atleast 3 chars']
    },
    area:{
        type: String,
        match:[/^.{3,}$/,'Area must have atleast 3 chars']
    },
    pincode: {
        type: Number,
        validate:[(pincode=>String(pincode).length==6),'Pincode must have 6 digits']
    },
    password: {
        required: [true, 'This field is Required'],
        type: String
    },
    wishlist:{
        type: []
    }
}, { collection: "User" });

const roleSchema = Schema({
    registeredUsers: [],
        buyers: [],
        sellers: []
}, { collection: "Role"});


const featuresSchema = Schema({
    propertyIds:{
        type:[]
    },
    propertyType:{
        type:String,
        required: [true, 'This field is Required'],
        validate:[(propertyType)=>(propertyType=='Sale'|| propertyType=='Rent'),"Property Type must be either 'Sale' or 'Rent'"]
    }, 
    propertyOwnership: {
        type:String,
        required: [true, 'This field is Required'],
        validate:[(propertyOwnership)=>(propertyOwnership=='Owner'|| propertyOwnership=='Broker'|| propertyOwnership=='Dealer'),"Ownership must be 'Owner' or 'Dealer' or 'Broker'"]
    }, 
    buildingType:  {
        type:String,
        required: [true, 'This field is Required'],
        validate:[(buildingType)=>(buildingType=='House'|| buildingType=='Apartment'),"Building Type must be either 'House' or 'Apartment'"]
    }, 
    noOfBathrooms:  {
        type:Number,
        required: [true, 'This field is Required'],
    }, 
    noOfBedrooms:  {
        type:Number,
        required: [true, 'This field is Required'],
    }, 
    noOfBalconies:  {
        type:Number,
        required: [true, 'This field is Required'],
    }, 
    furnishing: {
        type:String,
        validate:[(furnishing)=>(furnishing=='Fully Furnished'|| furnishing=='Semi Furnished'|| furnishing=='Unfurnished'),"Furnishing must be 'Fully Furnished' or 'Semi Furnished' or 'Unfurnished'"]
    }, 
    availability:  {
        type:String,
        validate:[(availability)=>(availability=='Ready to move'|| availability=='Under construction'),"Availability must be either 'Ready to move' or 'Under construction'"]
    }, 
}, { collection: "Features" });


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
    })



collection.getUserCollection = () => {
    return Mongoose.connect(url, { useNewUrlParser: true }).then((database) => {
        return database.model('User', userSchema)
    }).catch(() => {
        let err = new Error("Could not connect to Database");
        err.status = 500;
        throw err;
    })
}


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