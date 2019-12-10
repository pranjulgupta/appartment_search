import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellComponent } from './sell.component';
import { MaterialModule } from '../shared/material/material.module';
import { MatSidenavModule, MatProgressSpinnerModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatRadioModule, MatIconModule, MatSliderModule, MatTabsModule, MatSlideToggleModule, MatCheckboxModule } from '../../../node_modules/@angular/material';
import { ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { HttpClient, HttpHandler } from '../../../node_modules/@angular/common/http';
import { BrowserAnimationsModule } from '../../../node_modules/@angular/platform-browser/animations';

describe('SellComponent', () => {
  let component: SellComponent;
  let fixture: ComponentFixture<SellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellComponent ],
      imports:[ MatSidenavModule, ReactiveFormsModule,
        BrowserAnimationsModule,
       MaterialModule,
        MatProgressSpinnerModule, MatFormFieldModule,
        MatInputModule, MatSelectModule, MatOptionModule, MatRadioModule, MatIconModule, MatSliderModule, MatTabsModule,
      MatSlideToggleModule, MatCheckboxModule,],
      providers:[HttpClient,HttpHandler]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('Sell Form Field should be Invalid', async(() => {
    
  //   component.sellForm.controls['area'].setValue('');
  //   component.sellForm.controls['pincode'].setValue('');
  //   component.sellForm.controls['propertyOwnership'].setValue('');
  //   component.sellForm.controls['propertyType'].setValue('');
  //   component.sellForm.controls['buildingType'].setValue('');
  //   component.sellForm.controls['noOfBedrooms'].setValue('');
  //   component.sellForm.controls['noOfBathrooms'].setValue('');
  //   component.sellForm.controls['noOfBalconies'].setValue('');
  //   component.sellForm.controls['price'].setValue('');
  //   expect(component.sellForm.valid).toBeFalsy();
  // }));

  // it('sellForm Fields should be valid', async(() => {
    
  //   component.sellForm.controls['area'].setValue('Mysore');
  //   component.sellForm.controls['pincode'].setValue('570001');
  //   component.sellForm.controls['propertyOwnership'].setValue('Broker');
  //   component.sellForm.controls['propertyType'].setValue('Sale');
  //   component.sellForm.controls['buildingType'].setValue('Apartment');
  //   component.sellForm.controls['noOfBedrooms'].setValue('2');
  //   component.sellForm.controls['noOfBathrooms'].setValue('1');
  //   component.sellForm.controls['noOfBalconies'].setValue('2');
  //   component.sellForm.controls['price'].setValue('20000');
  //   expect(component.sellForm.valid).toBeTruthy();
  // }));

  // it('Sell Form Field should be Invalid', async(() => {
    
  //   component.sellForm.controls['area'].setValue('123');
  //   component.sellForm.controls['pincode'].setValue('55555555');
  //   component.sellForm.controls['propertyOwnership'].setValue('Roker');
  //   component.sellForm.controls['propertyType'].setValue('Seal');
  //   component.sellForm.controls['buildingType'].setValue('Appartment');
  //   component.sellForm.controls['noOfBedrooms'].setValue('-1');
  //   component.sellForm.controls['noOfBathrooms'].setValue('-1');
  //   component.sellForm.controls['noOfBalconies'].setValue('-1');
  //   component.sellForm.controls['price'].setValue('-800');
    
    
  //   expect(component.sellForm.valid).toBeFalsy();
  // }));

});
