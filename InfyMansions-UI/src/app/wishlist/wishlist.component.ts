import { Component, OnInit } from '@angular/core';
import { WishService } from './wish.service';
import { log } from 'util';
import { DialogService } from '../dialog/dialog.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { SharedServService } from '../shared-serv.service';
import { Router } from '../../../node_modules/@angular/router';

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
userName;

  constructor(private wishServ:WishService,private gd:SharedServService, 
    private dialogServ :DialogService ,public dialog : MatDialog, private _snackBar: MatSnackBar,
    private router:Router) { }




  ngOnInit() {
    this.userId=sessionStorage.getItem('userId')
    this.userName = sessionStorage.getItem('name');
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


    openSnackBar(message:string,action:string){
      this._snackBar.open(message,action,{
        duration:5000,
      verticalPosition:"top",
    panelClass:['snackbar-position'],
    horizontalPosition:"center"});
    }
    
    popup(data){
      this.openSnackBar(data,"Ok");
    }


    
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
  
 reroute(property){
  this.gd.getDescription(property);
  this.router.navigate(['/view'])
}

wishChange(p){
  if(this.userName){
    let index=this.wishlist.indexOf(p);
   
    if(index==-1){
      this.wishServ.addToList({userId:this.userId,propertyId:p}).subscribe(
        (success)=>{
          this.openSnackBar(p + " is added to your wishlist","Ok")
          this.wishlist.push(p)
        },
        (failure)=>{
          this.openSnackBar(" Something went wrong..!","Ok")
          
        }
      )
    }else{
      this.wishServ.deleteFromList({userId:this.userId,propertyId:p}).subscribe(
        (success)=>{
          this.openSnackBar(p + " is removed from your wishlist.","Ok")
          this.wishlist.splice(index,1)
        },
        (failure)=>{
          this.openSnackBar(" Something went wrong..!","Ok");
        }
      )
    }
  }
}

          
  
    
  }


