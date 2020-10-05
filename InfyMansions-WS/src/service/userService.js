const userdb = require( '../model/userModel' );

let userService = {}
//To check whether the user registered if so, then allow him/her to login
userService.checkUser = ( emailId, password ) => {
    return userdb.findUser( emailId ).then( userData => {

        if( userData == null ) {
            let err = new Error( "user not available!! Please register" );
            err.status = 404;
            throw err;
        }
            else return userData
        }
     )
}

//To check while registering that whether the login credential already exist or not.If not allow him/her to register
userService.addDetails = ( UserObj ) => {
    return userdb.findUser( UserObj.contactNo, UserObj.emailId ).then( object => {
        {
            if( object != null ) {
                let err = new Error( "user already exists with this emailId and contact Number" );
                err.status = 404;
                throw err;
            } else{
                return userdb.generateId().then( ( data ) => {
                    UserObj.userId = data;
                    // return bcrypt.hash(UserObj.password, 10).then(hash => {
                    //     console.log(hash)
                    //     UserObj.password = hash;
                        return userdb.addUser( UserObj ).then( ( data ) => {
                            if( data ) {
                                return data;
                            }
                            else{
                                return null;
                            }
                        } )
                    // })
                } )

            }
        }
    } )
}

// userService.showProperty=()=>{
//     return userdb.findProperty().then(object=>{
//         if(object==null){
//             let err= new Error("");
//             err.status=404;
//             throw err;
//         }else{
//             return object
//         }
//     })
// }

userService.getViewDetails=( id )=>{
    return userdb.viewDetails( id ).then( ( data )=>{
        if( data ){
            return data;
        }
        else{
            let err = new Error( "Error in fetching View Details" );
                err.status = 404;
                throw err;

        }
    } )
}


userService.getPropertyDetails=()=>{
    return userdb.propertyDetails().then( data=>{

        if( data.length==0 ){
            // console.log(44);
            let err = new Error( "Error in fetching Properties" );
                err.status = 404;
                throw err;
        }
        else{
            // console.log(data,55);
            return data
        }
    } )
}

userService.addProperty = ( dataObj ) => {
    // console.log('g')
    return userdb.generatePropertyId().then( id => {
        if( id ) {
            // console.log('h')
            dataObj.propertyId = id;
            return userdb.addProperty( dataObj ).then( modelRes => {
                if( modelRes ) {
                    return modelRes
                } else{
                    let err = new Error( "Property cannot be added! Try Again." )
                    err.status = 404;
                    throw err;
                }
            } )
        } else{
            // console.log('v')
            let err = new Error( "Property cannot be added! Try Again." )
                    err.status = 404;
                    throw err;
        }
    } )
}


//to get the wishlist
userService.getWishList=( userId )=>{
    return userdb.searchUser( userId ).then( data=>{
        if( data ){
            return data;
        } else{
            let err = new Error( "Your wishlist is empty.!!" );
            err.status = 404;
            throw err;
        }
    } )
}

//to add the wishlist
userService.addWishList=( userId,propertyId )=>{
    return userdb.insertWishList( userId,propertyId ).then( data=>{
        if( data ){
            return data;
        } else{
            let err = new Error( "Unable to add the data in wishlist.!!" );
            err.status = 404;
            throw err;
        }
    } )
}


//to delete from the wishlist
userService.deleteWishList=( userId,propertyId )=>{
    return userdb.deleteFromWishList( userId,propertyId ).then( data=>{
        if( data ){
            return data;
        } else{
            let err = new Error( "Unable to delete the data from wishlist.!!" );
            err.status = 404;
            throw err;
        }
    } )
}

            
userService.registeredUser=()=>{
    return userdb.regUser().then( regData=>{
        if( regData ){
            return regData
        } else{
            
            let err = new Error( "Registered data cannot be fetched" );
            err.status = 404;
            throw err;
        }
    } )
}

//admin
userService.propDetails=()=>{
    return userdb.propertyView().then( propData=>{
        if( propData==null ){
            let err = new Error( "Property Details cannot be fetched" );
            err.status = 404;
            throw err;
        } else{
            return propData;
        }
    } )
}


//admin
userService.locationProp = () => {
    return userdb.loc().then( data => {
        if( data ) {
            return data;
        } else{
            let err = new Error( "Location cannot be fetched" );
            err.status = 404;
            throw err;
        }
    } )
}


userService.getViewDetails = ( id ) => {
    return userdb.viewDetails( id ).then( ( data ) => {
        if( data ) {
            // console.log(data, 2222)
            return data;
        }
        else{
            let err = new Error( "Error in fetching View Details" );
            err.status = 404;
            throw err;

        }
    } )
}

///buy
userService.getPropertyDetails = () => {
    return userdb.propertyDetails().then( data => {
        // console.log(data, 33);
        if( data.length == 0 ) {
            // console.log(44);
            let err = new Error( "Error in fetching Properties" );
            err.status = 404;
            throw err;
        }
        else{
            // console.log(data,55);
            return data
        }
    } )
}



userService.getOwner = ( userid )=>{
    return userdb.getOwnerDetails( userid ).then( ( data )=>{
        if( data ){
            return data
        }{
            let err= Error( "No user found" )
            err.status=404;
            throw err;
        }
    } )
}
module.exports = userService;

///Profile component

//starwishlist
userService.getwishlistProperty=( userid )=>{
    return userdb.wishlistProperty( userid ).then( ( data )=>{
        if( data ){
            return data
        } else{
            let err= Error( "No user found" )
            err.status=404;
            throw err;
        }
    } )

    
   
}




userService.getPropertywish=( propertyId )=>{
    return userdb.Propertywish( propertyId ).then( ( data )=>{
        if( data ){
            return data
        } else{
            let err= Error( "No user found" )
            err.status=404;
            throw err;
        }
    } )

    
   
}
//wishlist
userService.getWishList=( userId )=>{
    return userdb.searchUser( userId ).then( wishlist=>{
        if( wishlist ){
            return wishlist
        } else{
            let err= Error( "No user found" )
            err.status=404;
            throw err;

        }
    } )
}


//to get the wishlist
userService.getWishList=( userId )=>{
    return userdb.searchUser( userId ).then( data=>{
        if( data ){
            return data;
        } else{
            let err = new Error( "Your wishlist is empty.!!" );
            err.status = 404;
            throw err;
        }
    } )
}

//to add the wishlist
userService.addWishList=( userId,propertyId )=>{
    return userdb.insertWishList( userId,propertyId ).then( data=>{
        if( data ){
            return data;
        } else{
            let err = new Error( "Unable to add the data in wishlist.!!" );
            err.status = 404;
            throw err;
        }
    } )
}

   


module.exports = userService;
