import { TestBed } from '@angular/core/testing';

import { ProfileService } from './profile.service';
import {  HttpClient, HttpHandler } from '../../../node_modules/@angular/common/http';

describe('ProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    
    
    providers:
     [  HttpClient, HttpHandler]

  }));

  it('should be created', () => {
    const service: ProfileService = TestBed.get(ProfileService);
    expect(service).toBeTruthy();
  });
});



