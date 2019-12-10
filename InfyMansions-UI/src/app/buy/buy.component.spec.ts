import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyComponent } from './buy.component';
import { MatProgressSpinnerModule, MatIconModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatSidenavModule, MatCardModule, MatDialog, MAT_DIALOG_SCROLL_STRATEGY, MatDialogModule } from '../../../node_modules/@angular/material';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { Overlay } from '../../../node_modules/@angular/cdk/overlay';

describe('BuyComponent', () => {
  let component: BuyComponent;
  let fixture: ComponentFixture<BuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyComponent ],
      imports:[MatProgressSpinnerModule,
        MatDialogModule,MatIconModule, MatFormFieldModule,MatInputModule,FormsModule, MatRadioModule, MatSidenavModule, MatCardModule],
      providers:[MatDialog, Overlay,]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  
});
