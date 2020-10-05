import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { SharedServService } from './shared-serv.service';
import { RegisterComponent } from './register/register.component';
import { BuyComponent } from './buy/buy.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { HomeComponent } from './home/home.component';
import { ViewDetailsComponent } from './viewDetails/view-details.component';


const routes: Routes = [
 
{
  path:"login",
  component:LoginComponent
},


{
  path:"register",
  component:RegisterComponent
},
{
  path:"home",
  component:HomeComponent
},
{
  path:"view",
  component:ViewDetailsComponent,canActivate:[SharedServService]
},


{
  path:"buy",
  component:BuyComponent
},

{
  path:"wishlist",
  component:WishlistComponent,canActivate:[SharedServService]
},
{
  path:"**", 
  redirectTo:"home"
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
