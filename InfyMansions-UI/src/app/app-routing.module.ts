import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
<<<<<<< HEAD
import { BuyComponent } from './shared/buy/buy.component';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';

=======
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { SellComponent } from './sell/sell.component';
import { BuyComponent } from './buy/buy.component';
>>>>>>> 823ce17b7ec8eaa8a480d5c5e7b20d0dd917beb5

const routes: Routes = [
 
{
  path:"login",
  component:LoginComponent
},
<<<<<<< HEAD
{path:"buy",
component:BuyComponent
},
{path:"profile",
component:ProfileComponent
},
{
  path:"**", 
  redirectTo:"login"
},
=======

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
  path:"**", 
  redirectTo:"home"
}
>>>>>>> 823ce17b7ec8eaa8a480d5c5e7b20d0dd917beb5

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
