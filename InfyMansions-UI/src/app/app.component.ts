import { Component } from '@angular/core';
import { Routes, Router } from '@angular/router';
<<<<<<< HEAD
import { MatSnackBar } from '../../node_modules/@angular/material';
=======
>>>>>>> 823ce17b7ec8eaa8a480d5c5e7b20d0dd917beb5

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
  constructor(private router: Router) {  }
  ngOnInit() {
   
  }
  reload(){
    this.ngOnInit()
  }
  login() {
    this.userName = sessionStorage.getItem('name');
  }
  onActivate(event) {
  }
 
}
