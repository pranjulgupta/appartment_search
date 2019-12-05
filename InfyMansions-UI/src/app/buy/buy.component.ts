import { Component, OnInit } from '@angular/core';
import { GetpropertyService } from './getproperty.service';
import { Router } from '@angular/router'
import {User} from './user'


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
  OwnerDetail:User;


 








  constructor(private gpService: GetpropertyService,private router:Router) { }

 
  
  ngOnInit() {
       this.gpService.getPropertyDetail().subscribe(
        (good)=>{
          console.log(1)
          console.log(good);
          this.propertyDb=good
          this.tempArr=good;
          console.log(good.availability)
        },
        (bad)=>{
          console.log(2)
          this.errorMessage=bad.error.message
        })
    }

//     buyFilter(data) {
//           this.buyArr = []
//           for (let i of this.tempArr) {
//             if (data == i.propertyType) {
//               this.buyArr.push(i)
//             }
//           }
//           if(this.buyArr){
//             this.propertyDb=this.buyArr
//           }
//           else return null;
// }
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
viewDetails(){
  this.router.navigate(['/viewDetails'])
}
clear(){
  this.propertyDb=this.tempArr;
}
}

// openSnackBar(message:string,action:string){
//   this._snackBar.open(Message,action,{duration:2000,
//   verticalPosition:"top",
// panelClass:['snackbar-position'],
// horizontalPosition:"center"})
// }

// openDialog(sellerId:String):void{
//   this.guService.getUserbyId(sellerId).subscribe(success=>{
//     this.ownerDetail=success;
//     const dialogRef= this.dialog.open(DialogueBoxComponent,{
//       width:'600pz',height:"125px",
//       data:this.ownerDetail,
//       position:{
//         left:'400px',
//         top:'250px'
//       }
//     })
//   })
// }
