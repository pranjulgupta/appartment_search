import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';
import { MatSnackBar } from '../../../node_modules/@angular/material';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  errorMessage:String;
  regData:String[];
  propData:String[];
  buyerData:String[];
  sellerData:String[];
  constructor(private service:AdminService,private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.adminView();
  }

  adminView(){
    this.service.regUser().subscribe(
      resp=>{
        for(let i=0;i<resp.length;i++){
          if(resp[i].name=='admin'){
            resp.splice(i,1)
          }
        }
        this.regData=resp
      },
      err=>{
        this.errorMessage=err.error.message
      }
    )

    this.service.propData().subscribe(
      resp=>{
        this.propData=resp
      },
      err=>{
        this.errorMessage=err.error.message
      }
    )

    this.service.buyer().subscribe(
      resp=>{
        this.buyerData=resp
      },
      err=>{
        this.errorMessage=err.error.message
      }
    )

    this.service.seller().subscribe(
      resp=>{
        this.sellerData=resp
      },
      err=>{
        this.errorMessage=err.error.message
      }
    )

  }

  deleteReg(userId){
    this.service.delUser(userId).subscribe(
      resp=>{
        this.openSnackBar("User"+resp+" has been removed. ","Ok");
        this.ngOnInit();
      },
      err=>{
        this.errorMessage=err.error.message
      }
    )
  }

  deleteProp(propId){
    this.service.delProp(propId).subscribe(
      resp=>{
        // this.openSnackBar("Property"+resp+" has been removed. ","Ok");
        this.ngOnInit();
      },
      err=>{
        this.errorMessage=err.error.message
      }
    )
  }

  
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
      verticalPosition: "top",
      panelClass: ['snackbar-position'],
      horizontalPosition: "center"
    });
  }

  popup(data) {
    this.openSnackBar(data, "Ok");
  }


}
