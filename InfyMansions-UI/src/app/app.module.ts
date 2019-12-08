//import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { FormsModule,ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { HomeComponent } from './home/home.component';
import { MatCheckboxModule, MatRadioModule, MatSelectModule, MatInputModule, MatButtonModule, MatButtonToggleModule, MatIconModule, MatProgressSpinnerModule, MatSidenavModule, MatDialogModule } from '../../node_modules/@angular/material';
import { SellComponent } from './sell/sell.component';
import { RegisterComponent } from './register/register.component';
import { BuyComponent } from './buy/buy.component';
import { ProfileComponent } from './profile/profile.component';
import { DialogComponent } from './dialog/dialog.component';
import { WishlistComponent } from './wishlist/wishlist.component';





@NgModule({
  declarations: [
    AppComponent,HomeComponent, SellComponent, RegisterComponent, BuyComponent, ProfileComponent, DialogComponent, WishlistComponent 
   
  ],
  imports: [
    AppRoutingModule,
    //BrowserModule,
    MaterialModule,
    // NgModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,MatRadioModule,MatSelectModule,MatInputModule,
    MatButtonModule,MatButtonToggleModule,MatIconModule,MatProgressSpinnerModule,MatSidenavModule,
    MatDialogModule

  ],
  entryComponents : [
    DialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
