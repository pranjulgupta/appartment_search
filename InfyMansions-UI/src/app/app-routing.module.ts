import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
<<<<<<< HEAD
import {RegisterComponent} from './shared/register/register.component';

=======
import { HomeComponent } from './shared/home/home.component';
>>>>>>> 174f8d4ebb6d801dd08d9349c1bf4ffce6d8f4d0
const routes: Routes = [
{
  path:"login",
  component:LoginComponent
},
{
<<<<<<< HEAD
  path:"register",
  component:RegisterComponent
=======
  path:"home",
  component:HomeComponent
>>>>>>> 174f8d4ebb6d801dd08d9349c1bf4ffce6d8f4d0
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
