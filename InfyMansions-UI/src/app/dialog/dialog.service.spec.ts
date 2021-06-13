import { TestBed } from '@angular/core/testing';

import { DialogService } from './dialog.service';
import {  HttpClientModule } from '../../../node_modules/@angular/common/http';
import {  MatDialog } from '../../../node_modules/@angular/material';

describe('DialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[ HttpClientModule],
    providers:[MatDialog]
    
  }));

  it('should be created', () => {
    const service: DialogService = TestBed.get(DialogService);
    expect(service).toBeTruthy();
  });
});
