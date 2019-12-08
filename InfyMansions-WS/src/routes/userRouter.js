const express = require('express');
const router = express.Router();
const userService = require('../service/userService');
// const propertyService=require('./service/propertyService')
// const Property=require('model/propertyModel')
var bodyParser = require('body-parser');
const create = require( '../model/dbsetup' );
const propService = require('../service/propertyService')
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


// router.get('/buy', function (req, res, next) {
//     userService.showProperty().then((data)=>{
//         res.json(data);
//     }).catch((err)=>next(err))  
// })

router.get('/buy', function(req,res,next){
    userService.getPropertyDetails().then(data=>{
        // console.log(3)
        // console.log(data,3);
        res.send(data)
    }).catch(err => next(err));
})


//To get user properties
router.get('/profile/:emailId',(req,res,next)=>{
    
    const emailid=req.params.emailId;
    console.log(emailid,3);
    
    userService.getProfile(emailid).then(data=>{
        console.log(data)
        res.json(data)
    }).catch(err=>{
        next(err)
    })
    
})

router.get('/properties/:userId',(req,res,next)=>{
    const userid=req.params.userId
    console.log(userid,7889);
    
    userService.getProperty(userid).then(result=>{
        res.json(result)
    }).catch(err=>
        next(err))
})

//star wishlist
router.get('/wishlistProperties/:userId',(req,res,next)=>{
    const userid=req.params.userId
    console.log(userid,7889);
    
    userService.getwishlistProperty(userid).then(result=>{
        res.json(result)
    }).catch(err=>
        next(err))
})
router.get('/wishlistProperties/:propertyId',(req,res,next)=>{
    const propertyId=req.params.propertyId
    console.log(propertyId,7889);
    
    userService.getPropertywish(propertyId).then(result=>{
        res.json(result)
    }).catch(err=>
        next(err))
})

//to get propdb for wishlist
router.get('/wishProp', function(req,res,next){
    userService.getPropertyDetails().then(data=>{
        // console.log(3)
        console.log(data,"wishproplist");
        res.send(data)
    }).catch(err => next(err));
})











router.get('/find/:userId',(req,res,next)=>{
    const userid=req.params.userId
    console.log(userid,7889);
    
    userService.getOwner(userid).then(result=>{
                res.json(result)
            }).catch(err=>
                next(err))
    

    
})

// router.get('/find/:userId'),(req,res,next)=>{
//     console.log("dksjafjdhj");
//     const userid=req.params.userId
//     console.log(userid,"shdfjsjf");
//     userService.getOwner(userid).then(result=>{
//         res.json(result)
//     }).catch(err=>
//         next(err))
// }


//To Sell
router.post('/sell', function(req, res, next){
    let data=req.body;
    propService.addNewProperty(data).then( response => {
        res.json(response)
    }).catch( err => next(err))

})

//wishlist
router.get('/wishList/:userId',(req,res,next)=>{
    let userId=req.params.userId;
    userService.getWishList(userId).then(data=>{
        res.json(data)
    }).catch( err => next(err))
})

module.exports = router;