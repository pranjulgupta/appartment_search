import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { SellService } from './sell.service';
import { MatSnackBar } from '../../../node_modules/@angular/material';

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
  errorMessage:String;

  color:'accent';
  mode='determinate';
  value=0;
  
  flag1=0;
  flag2=0;
  flag3=0;
  flag4=0;
  flag5=0;
  flag6=0;
  flag7=0;
  flag8=0;
  flag9=0;


  constructor(private fb: FormBuilder, private service : SellService, private _snackBar:MatSnackBar) { }

 
  ngOnInit() {
    this.sellForm = this.fb.group({
      area:['',Validators.required],
      pincode:['',Validators.required],
      propertyOwnership:['',Validators.required],
      buildingType:['',Validators.required],
      propertyType:['',Validators.required],
      noOfBedrooms:['',[Validators.required,Validators.min(1)]],
      noOfBathrooms:['',[Validators.required,Validators.min(1)]],
      noOfBalconies:['',[Validators.required,Validators.min(0)]],
      price:['',Validators.required],
      transactionType:[''],
      ageOfProperty:[''],
      availabilityBy:[''],
      furnishing:[''],
      noOfOpenParking:[''],
      noOfCoveredParking:[''],
      propertyArea:[''],
      lifts:[false],
      ac:[false],
      heater:[false],
      Address:[''],
      IntercomFacility:[false],
      wifi:[false],
      WaterSupplyFor24Hours:[false],
      CloseToSchool:[false],
      CloseToHospital:[false],
      CloseToRailwayStation:[false],
      CloseToAirport:[false],
      CloseToBank:[false],
      poojaRoom:[false],
  
    })
  
  }

  formatLabel(value:number){
    if(value>=1000){
      return Math.round(value/1000)+'k';
    }
    return value;
  }

  
    sell(){
      this.errorMessage=null;
      console.log(this.sellForm.value)
      this.service.sellProperty(this.sellForm.value).subscribe(
        (good) => {
          console.log(good)
          this.openSnackBar("Property added successfully","ok")
          
        },
        (bad) => {
          console.log(bad)
          this.errorMessage=bad.error.message


        }
      )
    }

    openSnackBar(message:string,action:string){

      this._snackBar.open(message,action,{
        duration:5000,
        verticalPosition:'top',
        panelClass:['snackbar-position'],
        horizontalPosition:'center'
      })

    }

    progress(){
      if(this.sellForm.controls.area.valid){
        if(this.flag1==0){
          this.value+=10;
          this.flag1=1;
        }
      }

      if(this.sellForm.controls.pincode.valid){
        if(this.flag2==0){
          this.value+=10;
          this.flag2=1;
        }
      }

      if(this.sellForm.controls.propertyOwnership.valid){
        if(this.flag3==0){
          this.value+=10;
          this.flag3=1;
        }
      }

      if(this.sellForm.controls.buildingType.valid){
        if(this.flag4==0){
          this.value+=10;
          this.flag4=1;
        }
      }

      if(this.sellForm.controls.propertyType.valid){
        if(this.flag5==0){
          this.value+=10;
          this.flag5=1;
        }
      }

      if(this.sellForm.controls.noOfBedrooms.valid){
        if(this.flag6==0){
          this.value+=10;
          this.flag6=1;
        }
      }

      if(this.sellForm.controls.noOfBathrooms.valid){
        if(this.flag7==0){
          this.value+=10;
          this.flag7=1;
        }
      }

      if(this.sellForm.controls.noOfBathrooms.valid){
        if(this.flag8==0){
          this.value+=10;
          this.flag8=1;
        }
      }

      if(this.sellForm.controls.price.valid){
        if(this.flag9==0){
          this.value+=20;
          this.flag9=1;
        }
      }


  }

}
