const express = require('express');
const router = express.Router();
const userService = require('../service/userService');
var bodyParser = require('body-parser');
const create = require( '../model/dbsetup' );
const bcrypt = require('bcryptjs')


router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


//To Login
router.post('/login', function (req, res, next) {
    let emailId = req.body.emailId;
    let password = req.body.password;
    userService.checkUser(emailId, password).then(result => {
        res.json(result);
    }).catch(err => next(err));
})

//To Register and Encrypting Password
router.post('/register', function (req, res, next) {
    bcrypt.genSalt(10,function(err,salt){
        bcrypt.hash(req.body.password,salt,function(err,hash){
            req.body.password=hash;
        })
    })
    let userObj= req.body;
    userService.addDetails(userObj).then((data)=>{
        // console.log(data)
        res.json({"message":"Registered successfully with User Id: "+data.userId});
    }).catch((err)=>
    next(err)
)
})


//To get User Properties in Profile
router.get('/profile/:emailId',(req,res,next)=>{
    const emailid=req.params.emailId;
    // console.log(emailid,3);
    userService.getProfile(emailid).then(data=>{
        // console.log(data)
        res.json(data)
    }).catch(err=>{
        next(err)
    })
})

//buy
// router.get('/properties', function (req, res, next) {
//     propertyService.getProperty().then((data)=>{
//         res.json(data);
//     }).catch((err)=>next(err))  
// })

// router.get('/features', function (req, res, next) {
//     propertyService.getFeature().then((data)=>{
//         res.json(data);
//     }).catch((err)=>next(err))  
// })

//To Search in Home Page
router.get('/location', function (req, res, next) {
    userService.location().then((data)=>{
        res.json(data);
    }).catch((err)=>next(err))  
})


/// to get propertyDb for buy component to display the properties

router.get('/buy', function(req,res,next){
    userService.getPropertyDetails().then(data=>{
        res.send(data)
    }).catch(err => next(err));
})

// to get from wishlist
router.get('/wishlist/:userId', function(req,res,next){
    let userId=req.params.userId;
    userService.getWishList(userId).then(data=>{
        // console.log(data,45);
        res.json(data);
    }).catch(err => next(err));
})

//to add data to wishlist
router.put('/add/wishlist', function(req,res,next){
    let userId=req.body.userId;
    let propertyId=req.body.propertyId;
    userService.addWishList(userId,propertyId).then(data=>{
        // console.log(data,75);
        res.json({message:"Property " + data + " has been added successfully to wishlist"});
    }).catch(err => next(err));
})

//to delete from wishlist
router.put('/remove/wishlist',function(req,res,next){
    let userId=req.body.userId;
    let propertyId=req.body.propertyId;
    userService.deleteWishList(userId,propertyId).then(data=>{
        // console.log(data,15);
        res.json({message:"Property " + data + " has been removed successfully from wishlist"});
    }).catch(err => next(err));
})


//To get Registered Users in Admin
router.get('/admin',function(req,res,next){
    userService.registeredUser().then((data)=>{
        res.json(data)
    }).catch((err)=>next(err))
})


// //To Delete Registered User in Admin
// router.delete('/deleteuser/:id',function(req,res,next){
//     const Id=parseInt(req.params.id);
//     userService.deleteUser(Id).then((data)=>{
//         res.json(data)
//     }).catch((err)=>next(err))
// })


//To View Buyers in Admin
router.get('/admin/buyer',function(req,res,next){
    userService.buyerUser().then((data)=>{
        res.json(data)
    }).catch((err)=>next(err))
})


//To View Sellers in Admin
router.get('/admin/seller',function(req,res,next){
    userService.sellerUser().then((data)=>{
        res.json(data)
    }).catch((err)=>next(err))
})


//To Search in Home Page
router.get('/search',function(req,res,next){
    userService.locationProp().then((data)=>{
        res.json(data)
    }).catch((err)=>next(err))
})

//To get properties in profile 
router.get('/properties/:userId',(req,res,next)=>{
    const userid=req.params.userId 
    userService.getProperty(userid).then(result=>{
        res.json(result)
    }).catch(err=>
        next(err))
})

//star wishlist
router.get('/wishlistProperties/:userId',(req,res,next)=>{
    const userid=req.params.userId
    // console.log(userid,7889);
    userService.getwishlistProperty(userid).then(result=>{
        res.json(result)
    }).catch(err=>
        next(err))
})


//To get the  details of the property using the propertyId
router.get('/view',(req,res,next)=>{
    const id=req.params.id;
    // console.log(id,11); 
    userService.getViewDetails(id).then(result=>{
        res.json(result)
    }).catch(err=>
        next(err))
})

//
// router.get('/wishlistProperties/:propertyId',(req,res,next)=>{
//     const propertyId=req.params.propertyId
//     console.log(propertyId,7889);
    
//     userService.getPropertywish(propertyId).then(result=>{
//         res.json(result)
//     }).catch(err=>
//         next(err))
// })

//to get propdb for wishlist
router.get('/wishProp', function(req,res,next){
    userService.getPropertyDetails().then(data=>{
        // console.log(3)
        // console.log(data,"wishproplist");
        res.send(data)
    }).catch(err => next(err));
})


// To find the owner details for Contact Owner
router.get('/find/:userId',(req,res,next)=>{
    const userid=req.params.userId
    // console.log(userid,7889);    
    userService.getOwner(userid).then(result=>{
                res.json(result)
            }).catch(err=>
                next(err))
    

    
})

//To Sell and post the property details
router.post('/sell', function(req, res, next){
    // console.log('z')
    let data=req.body;
    userService.addProperty(data).then( propdata => {
        res.json(propdata)
    }).catch( err => next(err))

})



// to get the wishlist of a user using the UserID
router.get('/wishlist/userId', function(req,res,next){
    let userId=req.body.userId;
    userService.getWishList(userId).then(data=>{
        // console.log(data,45);
        res.json(data);
    }).catch(err => next(err));
})

//to add property to wishlist of the logged in user
router.put('/add/wishlist', function(req,res,next){
    let userId=req.body.userId;
    let propertyId=req.body.propertyId;
    userService.addWishList(userId,propertyId).then(data=>{
        // console.log(data,75);
        res.json({message:"Property " + data + " has been added successfully to wishlist"});
    }).catch(err => next(err));
})

//to delete the property from the user's wishlist
router.put('/remove/wishlist',function(req,res,next){
    let userId=req.body.userId;
    let propertyId=req.body.propertyId;
    userService.deleteWishList(userId,propertyId).then(data=>{
        // console.log(data,15);
        res.json({message:"Property " + data + " has been removed successfully from wishlist"});
    }).catch(err => next(err));
})


// //to fetch details in admin component
// router.get('/admin',function(req,res,next){
//     userService.registeredUser().then((data)=>{
//         res.json(data)
//     }).catch((err)=>next(err))
// })


//to delete details in admin component
router.delete('/deleteuser/:userId',function(req,res,next){
    let userId=(req.params.userId);
    userService.deleteUser(userId).then((data)=>{
        res.json(data)
    }).catch((err)=>next(err))
})

// router.get('/admin/buyer',function(req,res,next){
//     userService.buyerUser().then((data)=>{
//         res.json(data)
//     }).catch((err)=>next(err))
// })

// router.get('/admin/seller',function(req,res,next){
//     userService.sellerUser().then((data)=>{
//         res.json(data)
//     }).catch((err)=>next(err))
// })


//to get the properties in admin component
router.get('/admin/property',function(req,res,next){
    userService.propDetails().then((data)=>{
        res.json(data)
    }).catch((err)=>next(err))
})

//to delete properties in admin
router.delete('/deleteprop/:propertyId',function(req,res,next){
    let propertyId=(req.params.propertyId);
    userService.deleteProperty(propertyId).then((data)=>{
        res.json(data)
    }).catch((err)=>next(err))
})

//wishlist
// router.get('/wishList/:userId',(req,res,next)=>{
//     let userId=req.params.userId;
//     userService.getWishList(userId).then(data=>{
//         res.json(data)
//     }).catch( err => next(err))
// })
    
module.exports = router;