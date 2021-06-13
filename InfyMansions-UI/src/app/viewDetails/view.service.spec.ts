import { TestBed } from '@angular/core/testing';

import { ViewService } from './view.service';
import {  HttpClient, HttpHandler } from '../../../node_modules/@angular/common/http';



describe('ViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers:
    [  HttpClient, HttpHandler]
  }));

  it('should be created', () => {
    const service: ViewService = TestBed.get(ViewService);
    expect(service).toBeTruthy();
  });
});
