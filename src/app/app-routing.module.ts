
import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';

import { AuthGuard } from './auth.guard';

import { ProductsComponent } from './products/products.component';
import { LogoutComponent } from './logout/logout.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { StoriesComponent } from './stories/stories.component';
import { OrganregisterComponent } from './organregister/organregister.component';
import { Login2Component } from './login2/login2.component';
import { ShowhospitalsComponent } from './showhospitals/showhospitals.component';

const routes: Routes = [
   {path:'', component:HomeComponent},
  // {path:'', component:Login2Component},
   {path:'login',  component:LoginComponent},
   {path:'stories',component:StoriesComponent},

  {path:'header',component:HeaderComponent},
  // {path:'head',component:HeaderComponent},
  {path:'organregistration',component:OrganregisterComponent},
  {path:'register', component:RegisterComponent}, 
  {path:'home',   component:HomeComponent},
  {path:'header/organsstore', component:HeaderComponent&&ProductsComponent},
  {path:'products',component:ProductsComponent},
  // {path:'header/organsstore', component:LoginComponent&&ProductsComponent},
  {path:'header/logout',   canActivate:[AuthGuard],  component:LogoutComponent},
  {path:'cart',      component:CartComponent},
  {path:'showhospitals',  component:ShowhospitalsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
