import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import {MatDialog} from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { DialogService } from '../dialog/dialog.service';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
email:String;
details;
errorMessage;
userId:String;
property;
ownerDetails;
wishlist;



  constructor(private profileServ:ProfileService , public dialog : MatDialog ,
    private dialogServ:DialogService, private wishServ:WishlistService) { }

  //dialog
  contactOwner(sellerId:String):void{
    this.dialogServ.getUserById(sellerId).subscribe(data=>{
      console.log(data,"success")
      this.ownerDetails=data
      const dialogRef = this.dialog.open(DialogComponent,{
        width : '600px',
        height :'125px',
        data : this.ownerDetails,
        position : {
          left : '400px',
          top : '250px'
        }
      });
      dialogRef.afterClosed().subscribe(result=>{
        console.log("The dialoge box closed")
      })

    })

 }
 

//  wishlist
//  wishlist(propertyid){
//    this.profileServ.addwishlist(this.userId,propertyid).subscribe(
//      (res)=>{
//        this.success=res;
//        if(res){
//          this.a=true
//        }
//      }
//    )
      
// }



  ngOnInit() {
    this.email=sessionStorage.getItem('emailId')
   
    this.profileServ.getProfile(this.email).subscribe(
      (res)=>{
        console.log(res);
        
        this.details=res;
      },(error)=>{
        this.errorMessage=error.error.message

      }
    )
    this.userId=sessionStorage.getItem('userId')
    
    this.profileServ.getProperties(this.userId).subscribe(
      (res)=>{
        this.property=res;
      },(error)=>{
        this.errorMessage=error.error.message;
      }
    )
  


    //wishlist
    if(this.userId){
      console.log(this.userId,"onn vaaaaa")
      
        this.wishServ.getWishList(this.userId).subscribe(success=>{
          
          this.wishlist=success;
          console.log(this.wishlist,"wishlist")
        },
      (err)=>{
        
        console.log("Empty wishlist")
      })
    }else{
      this.wishlist=[]
    }

    

  }

  
  

  }


 





  


