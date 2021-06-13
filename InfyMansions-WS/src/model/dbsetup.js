const collection = require( '../utilities/connection' );

const userDb = [
    {
        wishlist: ["P1001"],
        name: "admin",
        emailId: "admin@gmail.com",
        contactNo: 1234567890,
        city: "Mysore",
        
        area: "Hebbal",
        pincode: 123457,
        password: "$2a$10$ujdKjbOPAkZTAS7DrebZUObN1dhMqNQjfXEjAPfoh8gzBcS3gGB6O",
        userId: "U1001"
    },
    {
        wishlist: ["P1001", "P1002"],
        name: "user",
        emailId: "pranjul@gmail.com",
        contactNo: 9874567890,
        city: "Mysore",
        area: "Hebbal",
        pincode: 123457,
        password: "Pranjul@123?",
        userId: "U1002"
    }

]



// role collection
const roleDb =
{
    registeredUsers: ["U1002"],
    buyers: ["U1002"],
    sellers: ["U1001"]
}

const featuresDb =
{
    propertyType: "Rent",
    propertyOwnership: "Owner",
    buildingType: "House",
    noOfBathrooms: 2,
    noOfBedrooms: 2,
    noOfBalconies: 1,
    furnishing: "Fully Furnished",
    availability: "Ready to move",
}


//property Collection 
const propertyDb = [
    {
        // ids
        propertyId: "P1001",
        sellerId: "U1001",
        buyerId: "U1002",
        pincode: 570001,
        // 
        area: "Vani Vilas Mohalla",
        propertyType: "Rent",
        propertyOwnership: "Owner",
        buildingType: "Apartments",
        noOfBathrooms: 2,
        noOfBedrooms: 2,
        noOfBalconies: 1,
        furnishing: "Fully Furnished",
        availability: "Ready to move",
        // amenities
        lifts: true,
        ac: true,
        heater: false,
        maintenenceStaff: true,
        visitorParking: true,
        IntercomFacility: false,
        wifi: true,
        fireAlarm: false,
        WaterPurifier: false,
        PowerBackup: true,
        // highlights
        WaterSupplyFor24Hours: true,
        CloseToSchool: true,
        CloseToHospital: false,
        CloseToRailwayStation: true,
        CloseToBusStand: true,
        CloseToAirport: false,
        CloseToBank: true,
        CloseToPark: false,
        // other details
        status: "Available",
        Address: "196,12th Street",
        price: 15000,
        Advance: 50000,
        transactionType: "New",
        ageOfProperty: 1,
        availabilityBy: "Within 2 weeks",
        totalFloors: 10,
        PropertyFloor: 5,
        propertyArea: 1200,
        poojaRoom: true,
        servantRoonm: true,
        noofCoveredParking: true,
        noOfOpenParking: false,
        description: "Recently renovated and restored. Upper Unit - 2 Bedrooms 2 Full Bathroom - New kitchen, appliances, bathroom and flooring - Kitchen appliances included: Refrigerator, Gas Oven/ Range, Dishwasher, Over the Range Microwave - Private Washer and Dryer - 2 driveway parking spaces - All Bedrooms have large closets - 2 minute walk from village center: Restaurants, cafes, shops, bars, festivals, farmers market - Tenant pays Gas and Electricity - Available Immediately - Sorry, no pets Tenant pays gas and electricity",
        imageUrls: "../../../../assets/house1.jpg",
        extras: "Pets are not allowed"
    },
    {
        // ids
        propertyId: "P1002",
        sellerId: "U1002",
        buyerId: "U1001",
        pincode: 570016,
        // features
        area: "Mysore",
        propertyType: "Sale",
        propertyOwnership: "Owner",
        buildingType: "House",
        noOfBathrooms: 2,
        noOfBedrooms: 3,
        noOfBalconies: 2,
        furnishing: "Fully Furnished",
        availability: "Ready to move",
        // amenities
        lifts: true,
        ac: true,
        heater: false,
        maintenenceStaff: true,
        visitorParking: true,
        IntercomFacility: false,
        wifi: true,
        fireAlarm: false,
        WaterPurifier: false,
        PowerBackup: true,
        // highlights
        WaterSupplyFor24Hours: true,
        CloseToSchool: true,
        CloseToHospital: false,
        CloseToRailwayStation: true,
        CloseToBusStand: true,
        CloseToAirport: false,
        CloseToBank: true,
        CloseToPark: false,
        // other details
        status: "Available",
        Address: "197,2nd Street",
        price: 1200000,
        Advance: 50000,
        transactionType: "New",
        ageOfProperty: 1,
        availabilityBy: "Within 2 weeks",
        totalFloors: 10,
        PropertyFloor: 5,
        propertyArea: 1800,
        poojaRoom: true,
        servantRoonm: true,
        noofCoveredParking: false,
        noOfOpenParking: true,
        description: "Recently renovated and restored. Upper Unit - 2 Bedrooms 2 Full Bathroom - New kitchen, appliances, bathroom and flooring - Kitchen appliances included: Refrigerator, Gas Oven/ Range, Dishwasher, Over the Range Microwave - Private Washer and Dryer - 2 driveway parking spaces - All Bedrooms have large closets - 2 minute walk from village center: Restaurants, cafes, shops, bars, festivals, farmers market - Tenant pays Gas and Electricity - Available Immediately - Sorry, no pets Tenant pays gas and electricity",
        imageUrls: "../../../../assets/house2.jpg",
        extras: "Pets are not allowed"
    },
    {
        // ids
        propertyId: "P1003",
        sellerId: "U1001",
        buyerId: "U1002",
        pincode: 570016,
        // features
        area: "Mysore",
        propertyType: "Sale",
        propertyOwnership: "Owner",
        buildingType: "Apartments",
        noOfBathrooms: 2,
        noOfBedrooms: 2,
        noOfBalconies: 1,
        furnishing: "Fully Furnished",
        availability: "Ready to move",
        // amenities
        lifts: true,
        ac: true,
        heater: false,
        maintenenceStaff: true,
        visitorParking: false,
        IntercomFacility: false,
        wifi: true,
        fireAlarm: false,
        WaterPurifier: false,
        PowerBackup: true,
        // highlights
        WaterSupplyFor24Hours: true,
        CloseToSchool: true,
        CloseToHospital: false,
        CloseToRailwayStation: true,
        CloseToBusStand: true,
        CloseToAirport: false,
        CloseToBank: true,
        CloseToPark: false,
        // other details
        status: "Available",
        Address: "19,4th Street",
        price: 1200000,
        Advance: 50000,
        transactionType: "New",
        ageOfProperty: 2,
        availabilityBy: "Within 2 weeks",
        totalFloors: 10,
        PropertyFloor: 5,
        propertyArea: 1000,
        poojaRoom: true,
        servantRoonm: true,
        noofCoveredParking: false,
        noOfOpenParking: false,
        description: "Recently renovated and restored. Upper Unit - 2 Bedrooms 2 Full Bathroom - New kitchen, appliances, bathroom and flooring - Kitchen appliances included: Refrigerator, Gas Oven/ Range, Dishwasher, Over the Range Microwave - Private Washer and Dryer - 2 driveway parking spaces - All Bedrooms have large closets - 2 minute walk from village center: Restaurants, cafes, shops, bars, festivals, farmers market - Tenant pays Gas and Electricity - Available Immediately - Sorry, no pets Tenant pays gas and electricity",
        imageUrls: "../../../../assets/house3.jpg",
        extras: "Pets are not allowed"
    },
    {
        // ids
        propertyId: "P1004",
        sellerId: "U1002",
        buyerId: "U1001",
        pincode: 570017,
        // features
        area: "Mandimohalla",
        propertyType: "Rent",
        propertyOwnership: "Owner",
        buildingType: "Apartments",
        noOfBathrooms: 2,
        noOfBedrooms: 2,
        noOfBalconies: 1,
        furnishing: "Fully Furnished",
        availability: "Ready to move",
        // amenities
        lifts: true,
        ac: true,
        heater: false,
        maintenenceStaff: true,
        visitorParking: true,
        IntercomFacility: false,
        wifi: true,
        fireAlarm: false,
        WaterPurifier: false,
        PowerBackup: true,
        // highlights
        WaterSupplyFor24Hours: true,
        CloseToSchool: true,
        CloseToHospital: false,
        CloseToRailwayStation: true,
        CloseToBusStand: true,
        CloseToAirport: false,
        CloseToBank: true,
        CloseToPark: false,
        // other details
        status: "Available",
        Address: "19,8th Street",
        price: 8000,
        Advance: 50000,
        transactionType: "New",
        ageOfProperty: 3,
        availabilityBy: "Within 2 weeks",
        totalFloors: 10,
        PropertyFloor: 5,
        propertyArea: 1000,
        poojaRoom: true,
        servantRoonm: true,
        noofCoveredParking: true,
        noOfOpenParking: false,
        description: "Recently renovated and restored. Upper Unit - 2 Bedrooms 2 Full Bathroom - New kitchen, appliances, bathroom and flooring - Kitchen appliances included: Refrigerator, Gas Oven/ Range, Dishwasher, Over the Range Microwave - Private Washer and Dryer - 2 driveway parking spaces - All Bedrooms have large closets - 2 minute walk from village center: Restaurants, cafes, shops, bars, festivals, farmers market - Tenant pays Gas and Electricity - Available Immediately - Sorry, no pets Tenant pays gas and electricity",
        imageUrls: "../../../assets/house4.jpg",
        extras: "Pets are not allowed"
    },
    {
        // ids
        propertyId: "P1005",
        sellerId: "U1001",
        buyerId: "U1002",
        pincode: 570017,
        // features
        area: "Mandimohalla",
        propertyType: "Rent",
        propertyOwnership: "Owner",
        buildingType: "House",
        noOfBathrooms: 1,
        noOfBedrooms: 2,
        noOfBalconies: 1,
        furnishing: "Fully Furnished",
        availability: "Ready to move",
        // amenities
        lifts: true,
        ac: true,
        heater: false,
        maintenenceStaff: true,
        visitorParking: true,
        IntercomFacility: false,
        wifi: true,
        fireAlarm: false,
        WaterPurifier: false,
        PowerBackup: true,
        // highlights
        WaterSupplyFor24Hours: true,
        CloseToSchool: true,
        CloseToHospital: false,
        CloseToRailwayStation: true,
        CloseToBusStand: true,
        CloseToAirport: false,
        CloseToBank: true,
        CloseToPark: false,
        // other details
        status: "Available",
        Address: "196,12th Street",
        price: 9000,
        Advance: 30000,
        transactionType: "New",
        ageOfProperty: 1,
        availabilityBy: "Within 2 weeks",
        totalFloors: 10,
        PropertyFloor: 5,
        propertyArea: 900,
        poojaRoom: true,
        servantRoonm: true,
        noofCoveredParking: true,
        noOfOpenParking: false,
        description: "Recently renovated and restored. Upper Unit - 2 Bedrooms 2 Full Bathroom - New kitchen, appliances, bathroom and flooring - Kitchen appliances included: Refrigerator, Gas Oven/ Range, Dishwasher, Over the Range Microwave - Private Washer and Dryer - 2 driveway parking spaces - All Bedrooms have large closets - 2 minute walk from village center: Restaurants, cafes, shops, bars, festivals, farmers market - Tenant pays Gas and Electricity - Available Immediately - Sorry, no pets Tenant pays gas and electricity",
        imageUrls: "../../../assets/house5.jpg",
        extras: "Pets are not allowed"
    },
    {
        // ids
        propertyId: "P1006",
        sellerId: "U1002",
        buyerId: "U1001",
        pincode: 570017,
        // features
        area: "Mandimohalla",
        propertyType: "Sale",
        propertyOwnership: "Owner",
        buildingType: "House",
        noOfBathrooms: 2,
        noOfBedrooms: 2,
        noOfBalconies: 1,
        furnishing: "Fully Furnished",
        availability: "Ready to move",
        // amenities
        lifts: true,
        ac: true,
        heater: false,
        maintenenceStaff: true,
        visitorParking: true,
        IntercomFacility: false,
        wifi: true,
        fireAlarm: false,
        WaterPurifier: false,
        PowerBackup: true,
        // highlights
        WaterSupplyFor24Hours: true,
        CloseToSchool: true,
        CloseToHospital: false,
        CloseToRailwayStation: true,
        CloseToBusStand: true,
        CloseToAirport: false,
        CloseToBank: true,
        CloseToPark: false,
        // other details
        status: "Available",
        Address: "196,12th Street",
        price: 120000,
        Advance: 50000,
        transactionType: "New",
        ageOfProperty: 4,
        availabilityBy: "Within 2 weeks",
        totalFloors: 10,
        PropertyFloor: 5,
        propertyArea: 1000,
        poojaRoom: true,
        servantRoonm: true,
        noofCoveredParking: false,
        noOfOpenParking: true,
        description: "Recently renovated and restored. Upper Unit - 2 Bedrooms 2 Full Bathroom - New kitchen, appliances, bathroom and flooring - Kitchen appliances included: Refrigerator, Gas Oven/ Range, Dishwasher, Over the Range Microwave - Private Washer and Dryer - 2 driveway parking spaces - All Bedrooms have large closets - 2 minute walk from village center: Restaurants, cafes, shops, bars, festivals, farmers market - Tenant pays Gas and Electricity - Available Immediately - Sorry, no pets Tenant pays gas and electricity",
        imageUrls: "../../../assets/house6.jpg",
        extras: "Pets are not allowed"
    },
    {
        // ids
        propertyId: "P1007",
        sellerId: "U1002",
        buyerId: "U1001",
        pincode: 570017,
        // features
        area: "Mandimohalla",
        propertyType: "Sale",
        propertyOwnership: "Owner",
        buildingType: "Apartment",
        noOfBathrooms: 2,
        noOfBedrooms: 2,
        noOfBalconies: 1,
        furnishing: "Fully Furnished",
        availability: "Ready to move",
        // amenities
        lifts: true,
        ac: true,
        heater: false,
        maintenenceStaff: true,
        visitorParking: true,
        IntercomFacility: false,
        wifi: true,
        fireAlarm: false,
        WaterPurifier: false,
        PowerBackup: true,
        // highlights
        WaterSupplyFor24Hours: true,
        CloseToSchool: true,
        CloseToHospital: false,
        CloseToRailwayStation: true,
        CloseToBusStand: true,
        CloseToAirport: false,
        CloseToBank: true,
        CloseToPark: false,
        // other details
        status: "Available",
        Address: "196,12th Street, Model Town",
        price: 120000,
        Advance: 50000,
        transactionType: "New",
        ageOfProperty: 4,
        availabilityBy: "Within 2 weeks",
        totalFloors: 10,
        PropertyFloor: 5,
        propertyArea: 1000,
        poojaRoom: true,
        servantRoonm: true,
        noofCoveredParking: false,
        noOfOpenParking: true,
        description: "Recently renovated and restored. Upper Unit - 2 Bedrooms 2 Full Bathroom - New kitchen, appliances, bathroom and flooring - Kitchen appliances included: Refrigerator, Gas Oven/ Range, Dishwasher, Over the Range Microwave - Private Washer and Dryer - 2 driveway parking spaces - All Bedrooms have large closets - 2 minute walk from village center: Restaurants, cafes, shops, bars, festivals, farmers market - Tenant pays Gas and Electricity - Available Immediately - Sorry, no pets Tenant pays gas and electricity",
        imageUrls: "../../../assets/house7.jpg",
        extras: "Pets are not allowed"
    },
    {
        // ids
        propertyId: "P1008",
        sellerId: "U1001",
        buyerId: "U1002",
        pincode: 570017,
        // features
        area: "Mandimohalla",
        propertyType: "Sale",
        propertyOwnership: "Owner",
        buildingType: "Apartment",
        noOfBathrooms: 2,
        noOfBedrooms: 2,
        noOfBalconies: 1,
        furnishing: "Fully Furnished",
        availability: "Ready to move",
        // amenities
        lifts: true,
        ac: true,
        heater: false,
        maintenenceStaff: true,
        visitorParking: true,
        IntercomFacility: false,
        wifi: true,
        fireAlarm: false,
        WaterPurifier: false,
        PowerBackup: true,
        // highlights
        WaterSupplyFor24Hours: true,
        CloseToSchool: true,
        CloseToHospital: false,
        CloseToRailwayStation: true,
        CloseToBusStand: true,
        CloseToAirport: false,
        CloseToBank: true,
        CloseToPark: false,
        // other details
        status: "Available",
        Address: "119, Model Town",
        price: 120000,
        Advance: 50000,
        transactionType: "New",
        ageOfProperty: 4,
        availabilityBy: "Within 2 weeks",
        totalFloors: 10,
        PropertyFloor: 5,
        propertyArea: 1000,
        poojaRoom: true,
        servantRoonm: true,
        noofCoveredParking: false,
        noOfOpenParking: true,
        description: "Recently renovated and restored. Upper Unit - 2 Bedrooms 2 Full Bathroom - New kitchen, appliances, bathroom and flooring - Kitchen appliances included: Refrigerator, Gas Oven/ Range, Dishwasher, Over the Range Microwave - Private Washer and Dryer - 2 driveway parking spaces - All Bedrooms have large closets - 2 minute walk from village center: Restaurants, cafes, shops, bars, festivals, farmers market - Tenant pays Gas and Electricity - Available Immediately - Sorry, no pets Tenant pays gas and electricity",
        imageUrls: "../../../assets/house8.jpg",
        extras: "Pets are not allowed"
    },
    {
        // ids
        propertyId: "P1009",
        sellerId: "U1001",
        buyerId: "U10012",
        pincode: 570017,
        // features
        area: "Mandimohalla",
        propertyType: "Sale",
        propertyOwnership: "Owner",
        buildingType: "Apartment",
        noOfBathrooms: 2,
        noOfBedrooms: 2,
        noOfBalconies: 1,
        furnishing: "Fully Furnished",
        availability: "Ready to move",
        // amenities
        lifts: true,
        ac: true,
        heater: false,
        maintenenceStaff: true,
        visitorParking: true,
        IntercomFacility: false,
        wifi: true,
        fireAlarm: false,
        WaterPurifier: false,
        PowerBackup: true,
        // highlights
        WaterSupplyFor24Hours: true,
        CloseToSchool: true,
        CloseToHospital: false,
        CloseToRailwayStation: true,
        CloseToBusStand: true,
        CloseToAirport: false,
        CloseToBank: true,
        CloseToPark: false,
        // other details
        status: "Available",
        Address: "196, Model Town",
        price: 120000,
        Advance: 50000,
        transactionType: "New",
        ageOfProperty: 4,
        availabilityBy: "Within 2 weeks",
        totalFloors: 10,
        PropertyFloor: 5,
        propertyArea: 1000,
        poojaRoom: true,
        servantRoonm: true,
        noofCoveredParking: false,
        noOfOpenParking: true,
        description: "Recently renovated and restored. Upper Unit - 2 Bedrooms 2 Full Bathroom - New kitchen, appliances, bathroom and flooring - Kitchen appliances included: Refrigerator, Gas Oven/ Range, Dishwasher, Over the Range Microwave - Private Washer and Dryer - 2 driveway parking spaces - All Bedrooms have large closets - 2 minute walk from village center: Restaurants, cafes, shops, bars, festivals, farmers market - Tenant pays Gas and Electricity - Available Immediately - Sorry, no pets Tenant pays gas and electricity",
        imageUrls: "../../../assets/house9.jpg",
        extras: "Pets are not allowed"
    },
    {
        // ids
        propertyId: "P1010",
        sellerId: "U1002",
        buyerId: "U1001",
        pincode: 570017,
        // features
        area: "Mandimohalla",
        propertyType: "Sale",
        propertyOwnership: "Owner",
        buildingType: "House",
        noOfBathrooms: 2,
        noOfBedrooms: 2,
        noOfBalconies: 1,
        furnishing: "Fully Furnished",
        availability: "Ready to move",
        // amenities
        lifts: true,
        ac: true,
        heater: false,
        maintenenceStaff: true,
        visitorParking: true,
        IntercomFacility: false,
        wifi: true,
        fireAlarm: false,
        WaterPurifier: false,
        PowerBackup: true,
        // highlights
        WaterSupplyFor24Hours: true,
        CloseToSchool: true,
        CloseToHospital: false,
        CloseToRailwayStation: true,
        CloseToBusStand: true,
        CloseToAirport: false,
        CloseToBank: true,
        CloseToPark: false,
        // other details
        status: "Available",
        Address: "196, Gujranwala Town",
        price: 120000,
        Advance: 50000,
        transactionType: "New",
        ageOfProperty: 4,
        availabilityBy: "Within 2 weeks",
        totalFloors: 10,
        PropertyFloor: 5,
        propertyArea: 1000,
        poojaRoom: true,
        servantRoonm: true,
        noofCoveredParking: false,
        noOfOpenParking: true,
        description: "Recently renovated and restored. Upper Unit - 2 Bedrooms 2 Full Bathroom - New kitchen, appliances, bathroom and flooring - Kitchen appliances included: Refrigerator, Gas Oven/ Range, Dishwasher, Over the Range Microwave - Private Washer and Dryer - 2 driveway parking spaces - All Bedrooms have large closets - 2 minute walk from village center: Restaurants, cafes, shops, bars, festivals, farmers market - Tenant pays Gas and Electricity - Available Immediately - Sorry, no pets Tenant pays gas and electricity",
        imageUrls: "../../../assets/house10.jpg",
        extras: "Pets are not allowed"
    },

]

//location Collection
const locationDb = [
    {
        "propertyIds": ["P1001", "P1002"],
        "pincode": 570001,
        "area": "Mandimohalla",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "propertyIds": ["P1002"],
        "pincode": 570001,
        "area": "Krishna Rajendra Circle",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "pincode": 570001,
        "area": "Mysore",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "pincode": 570002,
        "area": "Vani Vilas Mohalla",
        "city": "Mysore",
        "state": "KARNATAKA"
    }
]



exports.setupDb = () => {
    return collection.getUserCollection().then( ( user ) => {
        return user.deleteMany().then( () => {
            return user.insertMany( userDb ).then( ( data ) => {
                if( data ) {
                    return collection.getRoleCollection().then( ( user ) => {
                        return user.deleteMany().then( () => {
                            return user.insertMany( roleDb ).then( ( data ) => {
                                if( data ) {
                                    return collection.getLocationCollection().then( ( user ) => {
                                        return user.deleteMany().then( () => {
                                            return user.insertMany( locationDb ).then( ( data ) => {
                                                if( data ) {
                                                    return collection.getFeaturesCollection().then( ( user ) => {
                                                        return user.deleteMany().then( () => {
                                                            return user.insertMany( featuresDb ).then( ( data ) => {
                                                                if( data ) {
                                                                    return collection.getPropertyCollection().then( ( user ) => {
                                                                        return user.deleteMany().then( () => {
                                                                            return user.insertMany( propertyDb ).then( ( data ) => {
                                                                                if( data ) {
                                                                                    return"Insertion Successfull"
                                                                                }
                                                                                else{
                                                                                    let err = new Error( "Insertion failed" );
                                                                                    err.status = 400;
                                                                                    throw err;
                                                                                }
                                                                            } )
                                                                        } )
                                                                    } )
                                                                }
                                                                else{
                                                                    let err = new Error( "Insertion failed" );
                                                                    err.status = 400;
                                                                    throw err;
                                                                }
                                                            } )
                                                        } )
                                                    } )
                                                }
                                                else{
                                                    let err = new Error( "Insertion failed" );
                                                    err.status = 400;
                                                    throw err;
                                                }
                                            } )
                                        } )
                                    } )
                                }
                                else{
                                    let err = new Error( "Insertion failed" );
                                    err.status = 400;
                                    throw err;
                                }
                            } )
                        } )
                    } )
                }
                else{
                    let err = new Error( "Insertion failed" );
                    err.status = 400;
                    throw err;
                }
            } )
        } )
    } )
}






