import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { MatGridListModule, MatCardModule, MatTabsModule,  MatProgressSpinnerModule, MatDialogModule, MatDialog, MAT_DIALOG_SCROLL_STRATEGY } from '../../../node_modules/@angular/material';
import { HttpClient, HttpHandler } from '../../../node_modules/@angular/common/http';
import { Overlay } from '../../../node_modules/@angular/cdk/overlay';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileComponent ],
      imports:[MatGridListModule, MatCardModule, MatTabsModule, MatProgressSpinnerModule,],
      providers:[HttpClient, HttpHandler, MatDialogModule, MatDialog, Overlay ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
