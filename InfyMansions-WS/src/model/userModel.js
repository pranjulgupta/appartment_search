const dbModel = require( '../utilities/connection' );
const userModel = {}
//To generate userId for new User
userModel.generateId = () => {
    return dbModel.getUserCollection().then( ( userModel ) => {
        return userModel.distinct( "userId" ).then( ( ids ) => {
            let idarr = ids.map( ( data ) => { return Number( data.slice( 1 ) ) } )
            let bId = Math.max( ...idarr );
            return"U" + ( bId + 1 );
        } )
    } )
}
//To check whether the user with conatctNo or emailId exist or not
userModel.findUser = ( emailId )=> {
    return dbModel.getUserCollection().then( model => {
       
        return model.findOne({"emailId": emailId}).then( ( userData )=>{
            
            if( userData===null ){
                return null;
            } else{
                return userData;
            }
        } )
    } )
}
//To find the user data
userModel.searchUser = ( userId )=> {
    return dbModel.getUserCollection().then( model => {
        return model.findOne( {"userId": userId},{wishlist:1,_id:0} ).then( ( userData )=>{
            // console.log("in model length",userData.wishlist.length)
            if( userData.wishlist.length < 1 ){
                return null
            } else{
                return userData.wishlist;
            }
        } )
    } )
}

userModel.addUser=(UserObj)=>{
    return dbModel.getUserCollection().then(model=>{
        return model.create(UserObj).then((userData)=>{
            if(userData.length==0){
                return null;
            }else{
                return userData;
            }
        })
    })
}

userModel.regUser=()=>{
    return dbModel.getUserCollection().then(model=>{
        return model.find({},{_id:0,userId:1,name:1,contactNo:1}).then((regData)=>{
            if(regData.length==0){
                return null;
            }else{
                return regData;
            }
        })
    })
}

userModel.delUser=(Id)=>{
    return dbModel.getUserCollection().then(model=>{
        return model.deleteOne({userId:Id}).then(delData=>{
            if(delData.n>0){
                return Id;
            }else{
                return null;
            }
        })
    })
}



module.exports = userModel;