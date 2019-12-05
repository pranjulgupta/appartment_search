import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
// import { WishlistComponent } from './wishlist/wishlist.component';


import { LoginComponent } from './login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
import { MatDialogModule } from '../../../node_modules/@angular/material';
import { BuyComponent } from './buy/buy.component';
=======
import { MatDialogModule } from '@angular/material';
>>>>>>> 823ce17b7ec8eaa8a480d5c5e7b20d0dd917beb5

let tobeShared =[MaterialModule]

@NgModule({
<<<<<<< HEAD
  declarations: [LoginComponent, BuyComponent],
=======
  declarations: [LoginComponent],
>>>>>>> 823ce17b7ec8eaa8a480d5c5e7b20d0dd917beb5
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
