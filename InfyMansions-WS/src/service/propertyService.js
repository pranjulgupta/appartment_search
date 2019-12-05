const propertydb = require('../model/propertyModel');
let propService = {}

propService.addNewproperty = (dataObj) => {
    return propertydb.generateId().then(id => {
        if(id == null){
            let err = new Error("Property cannot be added! Try Again.")
            err.status=404;
            throw err;
        }else{
            dataObj.propertyId=id;
            return propertydb.addNewProperty(dataObj).then( response => {
                if(response == null){
                    let err = new Error("Property cannot be added! Try Again.")
                    err.status=404;
                    throw err;

                }else{
                    return response;
                }
            })
        }
    })
}