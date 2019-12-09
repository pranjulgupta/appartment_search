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
    this.userName = sessionStorage.getItem('name')
  }
  reload(){
    this.ngOnInit()
  }
  login() {
    this.userName = sessionStorage.getItem('name');
  }
  onActivate(event) {
  }
 
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
      verticalPosition: 'top',
      panelClass: ['snackbar-position'],
      horizontalPosition:"center"
    });
  }

  loginSell(){
    this.openSnackBar('Please Sign in to Sell a Property!', 'Ok');
    this.router.navigate(['/login'])
  }

  buy(){
    this.router.navigate(['/buy'])
  }

  sell(){
    this.router.navigate(['./sell'])
  }
 
  signOut(){
    sessionStorage.clear();
    this.openSnackBar('Logged out successfully','Ok');
    this.ngOnInit();
    this.router.navigate(['/home']);
    // this.router.navigate(['/login'])
  }

  popup(data){
    this.openSnackBar(data,"Ok");
    this.router.navigate(['/login']);
    // console.log(data,454)
  }
 
  reroute(){
    this.router.navigate(['/profile'])
  }
 

}
