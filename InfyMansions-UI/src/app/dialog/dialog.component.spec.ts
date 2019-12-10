import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogComponent } from './dialog.component';
import { MatDialogModule } from '../../../node_modules/@angular/material';
import { DialogService } from './dialog.service';
import { RouterTestingModule } from '../../../node_modules/@angular/router/testing';
import {  HttpClientModule } from '../../../node_modules/@angular/common/http';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogComponent ],
      imports:[MatDialogModule, RouterTestingModule,HttpClientModule,],
      providers: [MatDialogModule,
         
          // useValue: {},
        
        DialogService, RouterTestingModule,
     ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
