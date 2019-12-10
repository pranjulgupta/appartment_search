import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailsComponent } from './view-details.component';
import {
  MatSnackBarModule, MatSidenavModule, MatProgressBarModule, MatListModule, MatCheckboxModule,
  MatTooltipModule,  MatIconModule ,
  MatButtonModule,MatToolbarModule,
  MatCardModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatDialog,
  
} from '@angular/material';
import { RouterTestingModule } from '../../../node_modules/@angular/router/testing';
import { HttpClient, HttpHandler } from '../../../node_modules/@angular/common/http';


describe('ViewDetailsComponent', () => {
  let component: ViewDetailsComponent;
  let fixture: ComponentFixture<ViewDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        
    
        MatSnackBarModule,
        MatSidenavModule,
        MatProgressBarModule,
        MatListModule,
        MatCheckboxModule,
        MatTooltipModule,
        
      
       MatMenuModule,
       MatFormFieldModule,
       MatInputModule,
       MatTooltipModule,
       MatToolbarModule,
       MatIconModule ,
        MatButtonModule,
        MatCardModule,

        MatDialogModule
   

      ],
      providers:[HttpClient, HttpHandler, MatDialogModule, MatDialog],
      declarations: [ ViewDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
