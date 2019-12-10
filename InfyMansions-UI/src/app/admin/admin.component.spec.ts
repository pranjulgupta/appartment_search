import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';
import { MatTabsModule, MatSnackBar } from '../../../node_modules/@angular/material';
import { HttpClientModule } from '../../../node_modules/@angular/common/http';
import { Overlay } from '../../../node_modules/@angular/cdk/overlay';
import { BrowserAnimationsModule } from '../../../node_modules/@angular/platform-browser/animations';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminComponent ],
      imports: [
        BrowserAnimationsModule,
        MatTabsModule,
        HttpClientModule,
      ],
      providers:[MatSnackBar, Overlay]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
