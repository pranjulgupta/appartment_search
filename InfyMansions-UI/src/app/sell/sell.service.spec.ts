import { TestBed } from '@angular/core/testing';

import { SellService } from './sell.service';
import {  HttpClient, HttpHandler } from '../../../node_modules/@angular/common/http';
;


describe('SellService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers:
    [  HttpClient, HttpHandler]
  }));

  it('should be created', () => {
    const service: SellService = TestBed.get(SellService);
    expect(service).toBeTruthy();
  });
});
