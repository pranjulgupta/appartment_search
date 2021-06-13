import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { MatGridListModule, MatIconModule, MatFormFieldModule, MatInputModule, MatCardModule, MatSnackBar } from '../../../node_modules/@angular/material';
import { ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { Overlay } from '../../../node_modules/@angular/cdk/overlay';
import { Router } from '../../../node_modules/@angular/router';
import { RouterTestingModule } from '../../../node_modules/@angular/router/testing';
import { HttpClient, HttpHandler } from '../../../node_modules/@angular/common/http';
import { AppComponent } from '../app.component';
import { BrowserAnimationsModule } from '../../../node_modules/@angular/platform-browser/animations';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports:[MatGridListModule,
        MatIconModule,
        MatCardModule,
        ReactiveFormsModule,
RouterTestingModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule],
    providers:[MatSnackBar, Overlay, RouterTestingModule, HttpClient, HttpHandler, AppComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid', async(() => {
    component.registerForm.controls['name'].setValue('');
    component.registerForm.controls['emailId'].setValue('');
    component.registerForm.controls['contactNo'].setValue('');
    component.registerForm.controls['password'].setValue('');
    expect(component.registerForm.value).toBeFalsy();
  }));

  // it('form should be valid', async(() => {
  //   component.registerForm.controls['name'].setValue('Testuser');
  //   component.registerForm.controls['emailId'].setValue('testuser@gmail.com');
  //   component.registerForm.controls['contactNo'].setValue('9876543218');
  //   component.registerForm.controls['password'].setValue('Test@123');
  //   expect(component.registerForm.value).toBeTruthy();
  // }));

  // it('form should be invalid', async(() => {
  //   component.registerForm.controls['name'].setValue('123');
  //   component.registerForm.controls['emailId'].setValue('abc@gmail.comm123');
  //   component.registerForm.controls['contactNo'].setValue('dhhyjhyj');
  //   component.registerForm.controls['password'].setValue('asdfg');
  //   expect(component.registerForm.value).toBeFalsy();
  // }));

  // it('should set submitted to true', async(() => {
  //   component.registerForm.controls['name'].setValue('Test User');
  //   component.registerForm.controls['emailId'].setValue('testuser@gmail.com');
  //   component.registerForm.controls['contactNo'].setValue('9876543218');
  //   component.registerForm.controls['password'].setValue('Test@123');
  //   component.register()
  //   expect(component.submitted).toBeTruthy();
  // }));

});
