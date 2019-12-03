import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { BuyComponent } from './shared/buy/buy.component';
const routes: Routes = [
{
  path:"login",
  component:LoginComponent
},
{
  path:"buy",
  component:BuyComponent
},
{
  path:"**", 
  redirectTo:"login"
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
