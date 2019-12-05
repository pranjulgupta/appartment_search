import { Component, OnInit } from '@angular/core';
import { GetpropertyService } from './getproperty.service';
import { Router } from '@angular/router'


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
  areaFilter=[]
  propTypeFilter
  propForFilter
  bedFilter
  bathFilter
  minFilter
  maxFilter
  noContent:boolean;

 








  constructor(private gpService: GetpropertyService) { }

 
  
  ngOnInit() {
       this.gpService.getPropertyDetail().subscribe(
        (good)=>{
          console.log(1)
          console.log(good);
          this.propertyDb=good
          this.tempArr=good;
        },
        (bad)=>{
          console.log(2)
          this.errorMessage=bad.error.message
        })
    }

    buyFilter(data) {
          this.buyArr = []
          for (let i of this.tempArr) {
            if (data == i.propertyType) {
              this.buyArr.push(i)
            }
          }
          if(this.buyArr){
            this.propertyDb=this.buyArr
          }
          else return null;
}
// filter(){
//   this.filtered=this.propertyDb;
//   if(this.areaFilter){
//     this.filtered=this.filtered.filter(_=>{
//       _.area.toLowerCase()==this.areaFilter.toLowerCase()
//     );
//   }
//   if(this.propForFilter && this.propForFilter!="Both"){
//     let favor:String;
//     if(this.propForFilter=="rent"){
//       favor=this.propForFilter;
//     }
//     else{
//       favor="sale"
//     }
//     this.filtered=this.filtered.filter(_=>{
//       console.log(_.propertype);
//       console.log(favor);
//       console.log(_.propertyType==favor);
//       return _.propertyType==favor;
//     });
//   }
//   if(this.propTypeFilter && this.propTypeFilter!="both"){
//     this.filtered=this.filtered.filter(_=>{
//       return _.buildingType==this.propTypeFilter;
//     });
//   }

//   if(this.bedFilter) {
//     this.filtered=this.filtered.filter(_=>{
//       return _.noOfBedrooms==this.bedFilter;
//     });
//   }

//   if(this.bathFilter) {
//     this.filtered=this.filtered.filter(_=>{
//       return _.noOfBathrooms==this.bathFilter;
//     });
//   }

//   if(this.minFilter) {
//     this.filtered=this.filtered.filter(_=>{
//       return _.price>=this.minFilter;
//     });
//   }

//   if(this.maxFilter) {
//     this.filtered=this.filtered.filter(_=>{
//       return _.price<=this.maxFilter;
//     });
//   }

//   if(this.filtered.length==0){
//     this.noContent=true;
//   }
//   else{
//     this.noContent=false;
//   }

// }

clear(){
  this.propertyDb=this.tempArr;
}
}