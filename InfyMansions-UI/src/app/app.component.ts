import { Component } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FA4UI';
  module = true;
  userLoggedIn;
  userName
  constructor(private router: Router, private _snackBar:MatSnackBar) {  }
  ngOnInit() {
<<<<<<< HEAD
    this.userName = sessionStorage.getItem('name');
=======
    this.userName = sessionStorage.getItem('name')
>>>>>>> 6e0ddb98d3fd2e039341dd7e50a1ab5495456d60
  }
  reload(){
    this.ngOnInit()
  }
  login() {
    this.userName = sessionStorage.getItem('name');
  }
  onActivate(event) {
  }

  buy(){
    this.router.navigate(['/buy'])
  }

  openSnackBar(message:string, action:string){
    this._snackBar.open(message,action,{
      duration:5000,
      verticalPosition: 'top',
      panelClass:['snackbar-position'],
      horizontalPosition:'center'
    });
  }


  signOut(){
    sessionStorage.clear();
    this.openSnackBar('Logged out successfully','Ok');
    this.ngOnInit();
    this.router.navigate(['/home']);
    // this.router.navigate(['/login'])
  }
}
