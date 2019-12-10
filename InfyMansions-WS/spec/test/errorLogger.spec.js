const ErrorLogger = require('../../src/utilities/ErrorLogger')
let obj={"errorLogger":ErrorLogger}
let next=()=>{

}
beforeEach(()=>{ 
    res={
        status:undefined,
        json:undefined,
        status:function(status){
            this.status=status;
        },
        json:function(status){
            this.json=val
        }
    }
})

it('Response status set to 500 by default error',()=>{
    let err = new Error('ErrorLogger test');
    try {obj.errorLogger(err,req,res,next) }
    catch(e)
{}
finally{
    expect(res.status).toEqual(500)
}
})
it('Response status is set using Error status',()=>{
    let err=new Error("ErrorLogger test");
    err.status=404
    try{
        obj.status=404
    }catch(e){}
    finally{
        expect(res.status).toEqual(404)
    }
})
