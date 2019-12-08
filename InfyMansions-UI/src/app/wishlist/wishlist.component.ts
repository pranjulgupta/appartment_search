import { Component, OnInit } from '@angular/core';
import { WishService } from './wish.service';
import { log } from 'util';
import { DialogService } from '../dialog/dialog.service';
import {MatDialog} from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  userId:String;
  propertyDb;
  errorMessage;
  wishlist=[];
  eachPropid:String;
  ownerDetails


  constructor(private wishServ:WishService, private dialogServ :DialogService ,public dialog : MatDialog) { }
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

  ngOnInit() {
    this.userId=sessionStorage.getItem('userId')
    
    this.wishServ.getwishProperties(this.userId).subscribe(
      (res)=>{
        
        
        // this.wishlistproperty=res;
        this.wishlist=res[0].wishlist
        console.log(this.wishlist,"whatever........")
        
        // for(let i=0;i<this.wishlist.length;i++){
        //   this.eachPropid=this.wishlist[i]
        //   }
        console.log(this.wishlist,"wish");
        

      },(error)=>{
        this.errorMessage=error.error.message;
      }
    )
    this.wishServ.getWishlistPropertis().subscribe(
      (good)=>{
        
        console.log(good,"wishlist objects");
        this.propertyDb=good

        
      },
      (bad)=>{
        
        this.errorMessage=bad.error.message
      })
    }




          
  
    
  }


