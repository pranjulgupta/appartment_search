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

  color:'primary';
  mode='determinate';
  progressVal=0;
  


  constructor(private fb: FormBuilder, private service : SellService, private _snackBar:MatSnackBar) { }

 
  ngOnInit() {
    this.sellForm = this.fb.group({
      area:['',Validators.required],
      pincode:['',Validators.required],
      propertyOwnership:['',Validators.required],
      buildingType:['',Validators.required],
      propertyType:['',Validators.required],
      noOfBedrooms:['',[Validators.required]],
      noOfBathrooms:['',[Validators.required]],
      noOfBalconies:['',[Validators.required]],
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
      if(this.progressVal<100){
        this.progressVal=this.progressVal+10
      }
      
    }
}
