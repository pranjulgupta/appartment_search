import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';



import { RegisterComponent } from './register/register.component';



import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatSelectModule,MatCheckboxModule,MatRadioModule  } from '@angular/material';
import { MatButtonModule,MatButtonToggleModule,MatIconModule,MatProgressSpinnerModule,MatSidenavModule } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MaterialModule,
    NgModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,MatRadioModule,MatSelectModule,MatInputModule,
    MatButtonModule,MatButtonToggleModule,MatIconModule,MatProgressSpinnerModule,MatSidenavModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
