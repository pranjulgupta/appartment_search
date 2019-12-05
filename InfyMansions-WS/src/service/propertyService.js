propertyService={}

propertyService.getProperty=()=>{
    return propertydb.getProperty().then((data)=>{
        if(data){
            return data;
        }
        else{
            let error=new error("Properties cannot be fetched");
            error.status=500;
            throw error;
        }
    })
}


propertyService.getFeature=()=>{
    return propertydb.getFeature().then((data)=>{
        if(data){
            return data;
        }
        else{
            let error=new error("Features cannot be fetched");
            error.status=500;
            throw error;
        }
    })
}
module.exports=propertyService;