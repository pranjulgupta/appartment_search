import { Injectable } from '@angular/core';
import { MatSnackBar } from '../../node_modules/@angular/material';
import { Router, CanActivate } from '../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedServService implements CanActivate{

prop:string;
userName:string;
area:string;

  
  constructor(private _snackBar: MatSnackBar,private router:Router) { }


  getDescription(pid){
    this.prop=pid;
  }

  sendProperty(){
    return this.prop;
  }

  getArea(area){
    this.area=area;
  }

  putArea(){
    return this.area;
  }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
      verticalPosition: "top",
      panelClass: ['snackbar-position'],
      horizontalPosition: "center"
    });
  }

  canActivate() {
    this.userName = sessionStorage.getItem('name')
      ;
    if (this.userName == null) {
      this.openSnackBar("User should login to proceed", 'OK');
      this.router.navigate(['/home'])
    }
    else {
      return true;
    }
  }

}
