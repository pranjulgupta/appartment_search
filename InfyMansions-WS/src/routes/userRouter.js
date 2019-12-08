const express = require('express');
const router = express.Router();
const userService = require('../service/userService');
var bodyParser = require('body-parser');
const create = require( '../model/dbsetup' );

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


//To login
router.post('/login', function (req, res, next) {
    let emailId = req.body.emailId;
    let password = req.body.password;
    userService.checkUser(emailId, password).then(result => {
        res.json(result);
    }).catch(err => next(err));
})


router.post('/register', function (req, res, next) {
    const userObj= req.body;
    userService.addDetails(userObj).then((data)=>{
        // console.log(data)
        res.json({"message":"Registered successfully with User Id: "+data.userId});
    }).catch((err)=>next(err))
})


//To get user properties
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

router.get('/location', function (req, res, next) {
    userService.location().then((data)=>{
        res.json(data);
    }).catch((err)=>next(err))  
})


/// to get propertyDb for buy component to display the properties

router.get('/buy', function(req,res,next){
    userService.getPropertyDetails().then(data=>{
        // console.log(data,3);
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



//admin
router.get('/admin',function(req,res,next){
    userService.registeredUser().then((data)=>{
        res.json(data)
    }).catch((err)=>next(err))
})

router.delete('/deleteuser/:id',function(req,res,next){
    const Id=parseInt(req.params.id);
    userService.deleteUser(Id).then((data)=>{
        res.json(data)
    }).catch((err)=>next(err))
})

router.get('/admin/buyer',function(req,res,next){
    userService.buyerUser().then((data)=>{
        res.json(data)
    }).catch((err)=>next(err))
})

router.get('/admin/seller',function(req,res,next){
    userService.sellerUser().then((data)=>{
        res.json(data)
    }).catch((err)=>next(err))
})

router.get('/admin/property',function(req,res,next){
    userService.propDetails().then((data)=>{
        res.json(data)
    }).catch((err)=>next(err))
})

router.delete('deleteprop/:id',function(req,res,next){
    const id=parseInt(req.params.id);
    userService.deleteProperty(id).then((data)=>{
        res.json(data)
    }).catch((err)=>next(err))
})

router.get('/search',function(req,res,next){
    userService.locationProp().then((data)=>{
        res.json(data)
    }).catch((err)=>next(err))
})

router.get('/properties/:userId',(req,res,next)=>{
    const userid=req.params.userId
    // console.log(userid);
    
    userService.getProperty(userid).then(result=>{
        res.json(result)
    }).catch(err=>
        next(err))
})

router.get('/view',(req,res,next)=>{
    const id=req.params.id;
    // console.log(id,11);
    
    userService.getViewDetails(id).then(result=>{
        res.json(result)
    }).catch(err=>
        next(err))
})


//To Sell
router.post('/sell', function(req, res, next){
    // console.log('z')
    let data=req.body;
    userService.addProperty(data).then( propdata => {

        res.json(propdata)
    }).catch( err => next(err))

})

module.exports = router;