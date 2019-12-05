import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  area=["Mandimohalla","Krishna Rajendra Circle","Mysore","Vani Villas Mohalla"];
  pincode=[570001,570002,570003,570004];
  sellForm:FormGroup;
  propertyOwnership=["Owner","Dealer","Broker"];
  availabilityBy=["Anytime", "Within 1 Week", "Within 2 Weeks"]


  constructor(private fb: FormBuilder) { }

 
  ngOnInit() {
    this.sellForm = this.fb.group({
      area:['',Validators.required],
      pincode:['',Validators.required],
      propertyOwnership:['',Validators.required],
      propertyType:['',Validators.required],
      noOfBedrooms:['',Validators.required],
      noOfBathrooms:['',Validators.required],
      noOfBalconies:['',Validators.required],
      price:['',Validators.required],
      transactionType:['',Validators.required],
      ageOfProperty:['',Validators.required],
      availabilityBy:['',Validators.required],
      furnishing:['',Validators.required],
      visitorParking:['',Validators.required],
      propertyArea:['',Validators.required],
      lifts:['',Validators.required],
      ac:['',Validators.required],
      heater:['',Validators.required],
      Address:['',Validators.required],
  
    })
  
  }

    
}
