import { TestBed } from '@angular/core/testing';

import { RegisterService } from './register.service';
import {  HttpClient, HttpHandler } from '../../../node_modules/@angular/common/http';


describe('RegisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers:
    [  HttpClient, HttpHandler]
  }));

  it('should be created', () => {
    const service: RegisterService = TestBed.get(RegisterService);
    expect(service).toBeTruthy();
  });
});
