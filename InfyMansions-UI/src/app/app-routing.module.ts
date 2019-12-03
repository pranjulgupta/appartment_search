import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
<<<<<<< HEAD
import { BuyComponent } from './shared/buy/buy.component';
=======
import { HomeComponent } from './shared/home/home.component';
>>>>>>> fae816170ec908f0561685c06f9d34769104a4f7
const routes: Routes = [
{
  path:"login",
  component:LoginComponent
},
{
<<<<<<< HEAD
  path:"buy",
  component:BuyComponent
=======
  path:"home",
  component:HomeComponent
>>>>>>> fae816170ec908f0561685c06f9d34769104a4f7
},
{
  path:"**", 
  redirectTo:"home"
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
