import { Component, OnInit } from '@angular/core';
import { GetpropertyService } from './getproperty.service';
import { Router } from '@angular/router'
import {User} from './user'
import { ViewService } from '../viewDetails/view.service';
import { SharedServService } from '../shared-serv.service';
import { MatSnackBar } from '../../../node_modules/@angular/material';

// import { DialogComponent } from '../dialog/dialog.component';
// import { DialogService } from '../dialog/dialog.service';


@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
    // propFor=["Buy","Rent","Both"];
  // proType=["House","Apartment","Both"]
  errorMessage: string;
  propertyArr: any[] = []
  buyArr:any[] = [];
  tempArr: any[] = []; 
  propertyDb=[];

  filtered=[];
  areaFilter:String="";
  propTypeFilter:String=null;
  propForFilter:String=null;
  bedFilter:Number=null;
  bathFilter:Number=null;
  minFilter:Number=null;
  maxFilter:Number=null;
  noContent:boolean=false;
  wishlist:Array<String>;
  userId:String;
  OwnerDetails:User;
  viewDet;
  userName:string;
 





  constructor(private gd:SharedServService,private gpService: GetpropertyService,private router:Router,private viewServ:ViewService,private _snackBar: MatSnackBar) { }
  // public dialog:MatDialog, privateServ:DialogService

 
  
  ngOnInit() {
    this.userName = sessionStorage.getItem('name');


     this.gpService.getPropertyDetail().subscribe(
        (good)=>{
          console.log(1)
          console.log(good);
          this.propertyDb=good
        },
        (bad)=>{
          console.log(2)
          this.errorMessage=bad.error.message
        })
    }


filter(){
  this.filtered = this.propertyDb;
  if (this.areaFilter) {
    this.filtered = this.filtered.filter(_ => {
      _.area.toLowerCase() == this.areaFilter.toLowerCase()
    });
  }
  if (this.propForFilter && this.propForFilter != "Both") {
    let favor: String;
    if (this.propForFilter == "rent") {
      favor = this.propForFilter;
    }
    else {
      favor = "sale"
    }
    this.filtered = this.filtered.filter(_ => {
      console.log(_.propertype);
      console.log(favor);
      console.log(_.propertyType == favor);
      return _.propertyType == favor;
    });
  }
  if (this.propTypeFilter && this.propTypeFilter != "both") {
    this.filtered = this.filtered.filter(_ => {
      return _.buildingType == this.propTypeFilter;
    });
  }

  if (this.bedFilter) {
    this.filtered = this.filtered.filter(_ => {
      return _.noOfBedrooms == this.bedFilter;
    });
  }

  if (this.bathFilter) {
    this.filtered = this.filtered.filter(_ => {
      return _.noOfBathrooms == this.bathFilter;
    });
  }

  if (this.minFilter) {
    this.filtered = this.filtered.filter(_ => {
      return _.price >= this.minFilter;
    });
  }

  if (this.maxFilter) {
    this.filtered = this.filtered.filter(_ => {
      return _.price <= this.maxFilter;
    });
  }

  if (this.filtered.length == 0) {
    this.noContent = true;
  }
  else {
    this.noContent = false;
  }

}
// viewDetails(id){
//   this.viewServ.getView(id).subscribe(data => {
//           this.viewDet = data;
//           SharedServService.viewdetpara=data;
// })}
clear(){
  this.propertyDb=this.tempArr;
}
//   contactOwner(sellerId: String): void {
//     this.dialogServ.getUserById(sellerId).subscribe(data => {
//       this.ownerDetails = success;
//       const dialogRef = this.dialog.open(DialogueBoxComponent, {
//         width: '600px', 
//         height: "125px",
//         data: this.ownerDetails,
//         position: {
//           left: '400px',
//           top: '250px'
//         }
//       });
//       dialogRef.afterCLosed().subscribe(result=>{
//         console.log("The dialogue box has closed")
//       })
//     })
//   }
  



openSnackBar(message:string,action:string){
  this._snackBar.open(message,action,{
    duration:5000,
  verticalPosition:"top",
panelClass:['snackbar-position'],
horizontalPosition:"center"});
}

popup(data){
  this.openSnackBar(data,"Ok");
  console.log(data,4544)
}

reroute(property){
  this.gd.getDescription(property);
  this.router.navigate(['/view'])
}


wishChange(p){
  if(this.userName){
    let index=p.wishlist.indexOf(p.propertyId);
    if(index==-1){
      this.gpService.addToList({userId:p.userId,propertyId:p.propertyId}).subscribe(
        (success)=>{
          this.openSnackBar(p + "is added to your wishlist","")
          this.wishlist.push(p)
        },
        (failure)=>{
          this.openSnackBar("Something went wrong..!","")
         
        }
      )
    }else{
      this.gpService.deleteFromList({userId:this.userId,propertyId:p}).subscribe(
        (success)=>{
          this.openSnackBar(p + "is removed from your wishlist.","")
          this.wishlist.splice(index,1)
        },
        (failure)=>{
          this.openSnackBar("Something went wrong..!","");
        }
      )
    }
  }
}


}


