import { Component, OnInit } from '@angular/core';
import { SharedServService } from '../shared-serv.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { ViewService } from './view.service';
import { MatSnackBar } from '../../../node_modules/@angular/material';
// import { DialogComponent } from '../dialog/dialog.component';
// import { DialogService } from '../dialog/dialog.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
a;
  constructor(private activatedRoute:ActivatedRoute, private service:ViewService,private gd:SharedServService,private _snackBar: MatSnackBar) { }


  propertyId:string;
  prop;
data;
features:any[]


  ngOnInit() {
    // this.a=SharedServService.viewdetpara;
    // console.log(this.a);
  //   this.activatedRoute.paramMap.subscribe(params => {
  //     console.log(params["params"].query,121)
  //     this.propertyId = params["params"].query
  //   })

  //   this.service.getView(this.propertyId).subscribe(
  //     (data) => {
  //       console.log(data,7878)
  //       this.prop = data;
  //     }, 
  //     (failure) => {
  //       console.log(failure,4)
  //     }
  //   )


  this.data=this.gd.sendProperty();
  console.log(this.data);

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
    console.log(data,4544)
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

  
}
