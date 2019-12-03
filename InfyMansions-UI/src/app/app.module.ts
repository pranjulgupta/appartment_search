import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
<<<<<<< HEAD
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
=======
import { FormsModule,ReactiveFormsModule } from '../../node_modules/@angular/forms';
import {MatInputModule}  from '@angular/material';
import {MatRadioModule}  from '@angular/material';
import {MatSelectModule}  from '@angular/material';
import {MatCheckboxModule,MatSidenavModule,MatButtonModule,MatIconModule,MatButtonToggleModule}  from '@angular/material';



>>>>>>> 174f8d4ebb6d801dd08d9349c1bf4ffce6d8f4d0

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


