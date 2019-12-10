import { TestBed } from '@angular/core/testing';

import { AdminService } from './admin.service';
import { HttpClient, HttpHandler } from '../../../node_modules/@angular/common/http';
import { MatSnackBar } from '../../../node_modules/@angular/material';

describe('AdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers:
    [  HttpClient,HttpHandler, MatSnackBar]
  }));

  it('should be created', () => {
    const service: AdminService = TestBed.get(AdminService);
    expect(service).toBeTruthy();
  });
});
