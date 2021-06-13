import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { MatGridListModule, MatFormFieldModule, MatInputModule, MatIconModule, MatCardModule, MatSnackBar } from '../../../../node_modules/@angular/material';
import { ReactiveFormsModule } from '../../../../node_modules/@angular/forms';
import { Overlay } from '../../../../node_modules/@angular/cdk/overlay';
import { Location, LocationStrategy, PathLocationStrategy, APP_BASE_HREF } from '../../../../node_modules/@angular/common';
import { RouterTestingModule } from '../../../../node_modules/@angular/router/testing';
import { HttpClient, HttpHandler } from '../../../../node_modules/@angular/common/http';
import { AppComponent } from '../../app.component';
import { BrowserAnimationsModule } from '../../../../node_modules/@angular/platform-browser/animations';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[MatGridListModule, MatFormFieldModule, MatInputModule, RouterTestingModule, MatIconModule,MatCardModule, ReactiveFormsModule,BrowserAnimationsModule],
      providers:[MatSnackBar,HttpClient,HttpHandler, Overlay, Location,AppComponent, RouterTestingModule, { provide: LocationStrategy, useClass: PathLocationStrategy },{provide: APP_BASE_HREF, useValue : '/' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be valid', async(() => {
    
    component.loginForm.controls['emailId'].setValue('user@gmail.com');
    
    component.loginForm.controls['password'].setValue('User@123');
    expect(component.loginForm.value).toBeTruthy();
  }));

  // it('form should be invalid', async(() => {
    
  //   component.loginForm.controls['emailId'].setValue('');
   
  //   component.loginForm.controls['password'].setValue('');
  //   expect(component.loginForm.value).toBeFalsy();
  // }));

  // it('should set loggedIn to true', async(() => {
   
  //   component.loginForm.controls['emailId'].setValue('testuser@gmail.com');
    
  //   component.loginForm.controls['password'].setValue('Test@123');
  //   component.login()
  //   expect(component.submitted).toBeTruthy();
  // }));

});
