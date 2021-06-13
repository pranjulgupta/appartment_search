import { TestBed } from '@angular/core/testing';

import { WishService } from './wish.service';
import {  HttpClient, HttpHandler } from '../../../node_modules/@angular/common/http';

describe('WishService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers:
    [  HttpClient, HttpHandler]
  }));

  it('should be created', () => {
    const service: WishService = TestBed.get(WishService);
    expect(service).toBeTruthy();
  });
});
