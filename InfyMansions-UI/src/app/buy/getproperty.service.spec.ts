import { TestBed, ComponentFixture, inject } from '@angular/core/testing';

import { GetpropertyService } from './getproperty.service';
import {  HttpClient, HttpHandler } from '../../../node_modules/@angular/common/http';
import { async } from '@angular/core/testing';

describe('GetpropertyService', () => {
  beforeEach(() => TestBed.configureTestingModule({
        
    providers:
     [  HttpClient, HttpHandler]
  }));

  it('should be created', () => {
    const service: GetpropertyService = TestBed.get(GetpropertyService);
    expect(service).toBeTruthy();
  });

  // it('Should get all properties', async(inject([GetpropertyService],(service) => {
  //   return service.buy().subscribe( res => {
  //     expect (res.length).toBeGreaterThan(0)});
  //   })))
    
  // it('Should get wishlisted properties', async([inject(GetpropertyService)],(service))
});
