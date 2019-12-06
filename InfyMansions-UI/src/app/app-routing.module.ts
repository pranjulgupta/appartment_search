import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';

import { RegisterComponent } from './register/register.component';
import { SellComponent } from './sell/sell.component';
import { BuyComponent } from './buy/buy.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

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
  path:"sell",
  component:SellComponent
},
{
  path:"buy",
  component:BuyComponent
},
{
  path:"profile",
  component: ProfileComponent
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
