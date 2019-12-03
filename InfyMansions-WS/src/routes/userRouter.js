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
    const userObj= new User(req.body);
    userService.addDetails(userObj).then((data)=>{
        res.json({"message":"Registered successfully "+data});
    }).catch((err)=>next(err))  
})

module.exports = router;