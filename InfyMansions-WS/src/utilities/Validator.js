Validator={}
Validator.validateEmailId=(emailId)=>{
    if(!emailId.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]{1,}(.co.in||.com)$/)){
        let err=new Error();
        err.message="Invalid EmailId";
        err.status=500;
        throw err;
    }else{
        return true;
    }
}
Validator.validatePassword=(password)=>{
    if(!password.test(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{7,50}$/)){
        let err=new Error();
        err.message="Invalid Password";
        err.status=500;
        throw err;
    }else{
        return true;
    }
}
Validator.validateContactNo=(contactNo)=>{
    if(!contactNo.test(/[1-9]{1}[0-9]{9}/)){
        let err=new Error();
        err.message="Contact No does not match";
        err.status=500;
        throw err;
    }else{
        return true;
    }
}
Validator.validateName=(name)=>{
    if(!name.test(/[^ ][a-zA-Z]{1,}$/)){
        let err=new Error();
        err.message="Name does not match";
        err.status=500;
        throw err;
    }else{
        return true;
    }
}