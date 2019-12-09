import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
// import { AppComponent} from "../app.component";
import { LoginService } from './loginService';
import { log } from 'util';
import { AppComponent } from '../../app.component';
import { MatSnackBar } from 'node_modules/@angular/material';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string;
  loginForm: FormGroup;
  registerPage = false;
  contactNo = '';
  emailId = '';
  hide = true;
  key = false;
  show = true;



  constructor(private _snackBar: MatSnackBar, private location: Location, private fb: FormBuilder, private router: Router, private loginService: LoginService, private app: AppComponent) {
    sessionStorage.setItem("PreviousUrl", sessionStorage.getItem("CurrentUrl"));
    sessionStorage.setItem("CurrentUrl", this.router.url);
  }

  ngOnInit() {
    window.scrollTo(0, 0)
    //form is created on page load
    this.loginForm = this.fb.group({
      emailId: [''],
      contactEmail: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]{1,}(.co.in||.com)$/)]],
      password: ['', [Validators.required, Validators.minLength(7),Validators.maxLength(20)]]
    })
  }

openSnackBar(message: string, action: string) {
  this._snackBar.open(message, action, {
    duration: 5000,
    verticalPosition: 'top',
    panelClass: ['snackbar-position'],
    horizontalPosition:"center"
  });
}

login() {

  this.validateContactEmail(this.loginForm.value.contactEmail)
  this.loginService.login(this.loginForm.value).subscribe(
    (response) => {
      sessionStorage.setItem("contactNo", response.contactNo);
      sessionStorage.setItem("userId", response.userId);
      sessionStorage.setItem("emailId", response.emailId);
      sessionStorage.setItem("name", response.name);
      this.openSnackBar('Logged in successfully', 'Ok');
      if (this.loginForm.value.emailId == "admin@gmail.com") {
        this.router.navigate(['/admin'])
      }
      else {
        this.router.navigate(['/home'])
      }
      this.errorMessage = null;
      this.app.reload()
    },
    (errorResponse) => {
     console.log(errorResponse);
     
      this.errorMessage = errorResponse.error.message;
      sessionStorage.clear();
    }

  )
};

validateContactEmail(inputtxt){
  var contact = /^\d{10}$/;
  if (inputtxt.match(contact)) {
    return this.loginForm.value.contactNo = inputtxt;
  }
  else {
    return this.loginForm.value.emailId = inputtxt;
  }
}

getRegisterPage(){
  this.registerPage = true;
  //open register page if the user is not registered already
  this.router.navigate(['/register'])
}
down(event,value:string){
  if(event.key==="Enter"){
    sessionStorage.setItem("PreviousUrl","/home");
    sessionStorage.setItem("search",value.toString());
    this.router.navigate(['/buy']);
  }
}
}





