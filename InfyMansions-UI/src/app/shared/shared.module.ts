import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
// import { WishlistComponent } from './wishlist/wishlist.component';


import { LoginComponent } from './login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '../../../node_modules/@angular/material';
<<<<<<< HEAD
import { BuyComponent } from './buy/buy.component';
=======
import { HomeComponent } from './home/home.component';
>>>>>>> fae816170ec908f0561685c06f9d34769104a4f7

let tobeShared =[MaterialModule]

@NgModule({
<<<<<<< HEAD
  declarations: [LoginComponent, BuyComponent],
=======
  declarations: [LoginComponent, HomeComponent],
>>>>>>> fae816170ec908f0561685c06f9d34769104a4f7
  imports: [
    CommonModule,
    MaterialModule, 
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [],


  exports:[LoginComponent]
})
export class SharedModule { }
