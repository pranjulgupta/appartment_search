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
exports.setupDb = () => {
    return collection.getUserCollection().then((user) => {
        return user.deleteMany().then(() => {
            return user.insertMany(userDb).then((data) => {
                if (data) return "Insertion Successfull"
                else {
                    let err = new Error("Insertion failed");
                    err.status = 400;
                    throw err;
                }
            })
        })
    })
}