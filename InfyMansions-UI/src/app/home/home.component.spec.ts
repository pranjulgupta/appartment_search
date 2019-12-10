import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {  MatOptionModule, MatSelectModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSnackBar } from '../../../node_modules/@angular/material';
import {  HttpClient, HttpHandler } from '../../../node_modules/@angular/common/http';
import { Router } from '../../../node_modules/@angular/router';
import { RouterTestingModule } from '../../../node_modules/@angular/router/testing';
import { BrowserAnimationsModule } from '../../../node_modules/@angular/platform-browser/animations';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports:[MatOptionModule,MatSelectModule,MatIconModule, MatFormFieldModule,BrowserAnimationsModule, MatInputModule,RouterTestingModule],
      providers:[HttpClient, HttpHandler, RouterTestingModule, MatSnackBar]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
