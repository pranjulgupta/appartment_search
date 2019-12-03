import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
// import { WishlistComponent } from './wishlist/wishlist.component';


import { LoginComponent } from './login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material';
import { RegisterComponent } from './register/register.component';

let tobeShared =[MaterialModule]

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
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
