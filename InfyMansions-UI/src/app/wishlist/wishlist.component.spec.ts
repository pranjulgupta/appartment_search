import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistComponent } from './wishlist.component';
import { MatGridListModule, MatCardModule, MatIconModule, MatSpinner, MatProgressSpinnerModule, MatSnackBar, MatDialog, MatDialogModule } from '../../../node_modules/@angular/material';
import {  HttpClient, HttpHandler } from '../../../node_modules/@angular/common/http';
import { Overlay } from '../../../node_modules/@angular/cdk/overlay';
import { Router } from '../../../node_modules/@angular/router';
import { RouterTestingModule } from '../../../node_modules/@angular/router/testing';

describe('WishlistComponent', () => {
  let component: WishlistComponent;
  let fixture: ComponentFixture<WishlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishlistComponent],
      imports:[MatGridListModule,
        MatDialogModule,
        MatIconModule,
        MatCardModule,
        MatProgressSpinnerModule,RouterTestingModule],
      providers:[HttpClient, HttpHandler, MatSnackBar, Overlay, RouterTestingModule, MatDialog, MatDialogModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
