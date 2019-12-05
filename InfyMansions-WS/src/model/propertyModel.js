const dbModel = require('../utilities/connection');
const propModel= {}

propModel.generateId = () => {
    return dbModel.getPropertyCollection().then( propModel => {
        return propModel.distinct("propertyId").then( ids => {
            let idarr = ids.map( (data) => {return Number(data.slice(1))})
            let bId= Math.max(...idarr);
            return "P"+(bId+1);
        })
    })
}

propModel.addNewProperty = (property) => {
    return dbModel.getPropertyCollection().then( propModel => {
        return propModel.create(property).then( data => {
            if(data){
                return data;
            }else{
                return null;
            }
        })
    })
}

module.exports = propModel;