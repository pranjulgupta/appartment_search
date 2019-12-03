import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatInputModule}  from '@angular/material';
import {MatRadioModule}  from '@angular/material';
import {MatSelectModule}  from '@angular/material';
import {MatCheckboxModule,MatSidenavModule,MatButtonModule,MatIconModule,MatButtonToggleModule}  from '@angular/material';
import { RegisterComponent } from './register/register.component';





@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent
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


