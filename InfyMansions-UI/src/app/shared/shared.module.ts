import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
// import { WishlistComponent } from './wishlist/wishlist.component';


import { LoginComponent } from './login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
import { MatDialogModule } from '@angular/material';
import { RegisterComponent } from './register/register.component';
=======
import { MatDialogModule } from '../../../node_modules/@angular/material';
import { HomeComponent } from './home/home.component';
>>>>>>> 174f8d4ebb6d801dd08d9349c1bf4ffce6d8f4d0

let tobeShared =[MaterialModule]

@NgModule({
<<<<<<< HEAD
  declarations: [LoginComponent, RegisterComponent],
=======
  declarations: [LoginComponent, HomeComponent],
>>>>>>> 174f8d4ebb6d801dd08d9349c1bf4ffce6d8f4d0
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
