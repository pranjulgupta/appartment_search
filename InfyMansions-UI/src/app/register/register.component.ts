import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RegisterService } from './register.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

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
  constructor(private _snackBar: MatSnackBar, private fb: FormBuilder, private router: Router, private registerService: RegisterService, private app: AppComponent) {
    sessionStorage.setItem("PreviousUrl", sessionStorage.getItem("CurrentUrl"));
    sessionStorage.setItem("CurrentUrl", this.router.url);
  }

  ngOnInit() {
    window.scrollTo(0, 0)
    this.registerForm = this.fb.group({
      // /^([a-z][a-zA-Z0-9_]*(\.[a-zA-Z][a-zA-Z0-9_]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?)|[7-9][0-9]{9}$/
      name:['',[Validators.required, Validators.pattern(/[^ ][a-zA-Z]{1,}$/)]],
      emailId: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]{1,}(.co.in||.com)$/)]],
      contactNo:['',[Validators.required,Validators.pattern(/[1-9]{1}[0-9]{9}/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{7,20}$/)]]
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

  register() {
    this.registerService.register(this.registerForm.value).subscribe(  
      (response) => {
        this.openSnackBar(response.message, 'Ok');
        this.router.navigate(['/home']);
      },
      (errorResponse) => {
       //console.log(errorResponse);
       this.openSnackBar(errorResponse.error.message,'Ok');
      }
    )
  };
}

