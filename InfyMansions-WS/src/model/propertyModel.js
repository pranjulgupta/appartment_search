propertyModel={}

propertyModel.getProperty=()=>{
    return dbModel.getPropertyCollection().then(pModel=>{
        return pModel.find({},{"_id":0}).then((pdata)=>{
            if(pdata.length==0){
                return null
            }
            else{
                return pdata;
            }
        })
    })
}

propertyModel.getFeature=()=>{
    return dbModel.getFeatureCollection().then(fModel=>{
        return pModel.find({},{"_id":0}).then((fdata)=>{
            if(fdata.length==0){
                return null
            }
            else{
                return fdata;
            }
        })
    })
}
module.exports=propertyModel;