import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { BuyComponent } from './shared/buy/buy.component';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
 
{
  path:"login",
  component:LoginComponent
},
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
