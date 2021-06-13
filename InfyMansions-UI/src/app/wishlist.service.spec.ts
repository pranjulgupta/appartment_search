import { TestBed } from '@angular/core/testing';

import { WishlistService } from './wishlist.service';
import {  HttpClient, HttpHandler } from '../../node_modules/@angular/common/http';

describe('WishlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers:
    [  HttpClient, HttpHandler]
  }));

  it('should be created', () => {
    const service: WishlistService = TestBed.get(WishlistService);
    expect(service).toBeTruthy();
  });
});
