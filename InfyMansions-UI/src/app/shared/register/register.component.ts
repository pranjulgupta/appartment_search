import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  errorMessage: string;
  registerForm: FormGroup;
  registerPage = false;
  contactNo = '';
  emailId = '';
  myName='';
  password='';
  hide = true;
  key = false;
  show = true;
  constructor(private fb:FormBuilder, private ser:RegisterService) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      myName:['',[Validators.required, Validators.pattern(/[^ ][a-zA-Z]{1,}$/)]],
      emailId: ['', [Validators.required, Validators.pattern(/^([a-z][a-zA-Z0-9_]*(\.[a-zA-Z][a-zA-Z0-9_]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?)|[7-9][0-9]{9}$/)]],
      contactNo:['',[Validators.required,Validators.pattern(/[1-9]{1}[0-9]{9}/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{7,20}$/)]]
    })
  }
}
