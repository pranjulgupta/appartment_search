Validator=require('../../src/utilities/validator.js')
describe('Email Id Validation',()=>{
    it('should validate the incoming emailId',()=>{
        expect(Validator.validateEmailId("dana@gmail.com")).toBeTruthy()
    })
})
describe('Email Id Validation',()=>{
    it('should validate the incoming emailId',()=>{
        expect(Validator.validateEmailId("dana@gmail.com1")).toBeFalsy()
    })
})
describe('Password Validation',()=>{
    it('should validate the incoming password',()=>{
        expect(Validator.validatePassword("dana")).toBeFalsy()
    })
})