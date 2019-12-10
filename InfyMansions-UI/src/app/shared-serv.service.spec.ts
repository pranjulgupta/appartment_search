import { TestBed } from '@angular/core/testing';

import { SharedServService } from './shared-serv.service';
import { MatSnackBar } from '../../node_modules/@angular/material';
import { Overlay } from '../../node_modules/@angular/cdk/overlay';
import { Router } from '../../node_modules/@angular/router';
import { RouterTestingModule } from '../../node_modules/@angular/router/testing';

describe('SharedServService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[RouterTestingModule],
    providers:[MatSnackBar, Overlay, Router]
  }));

  // it('should be created', () => {
  //   const service: SharedServService = TestBed.get(SharedServService);
  //   expect(service).toBeTruthy();
  // });
});
