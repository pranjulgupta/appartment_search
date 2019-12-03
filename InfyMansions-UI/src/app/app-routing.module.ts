import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

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
  path:"**", 
  redirectTo:"home"
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
