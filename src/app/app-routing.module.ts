import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; 
import { HomeComponent } from './home/home.component';
import { TravelSelectComponent } from './travel-select/travel-select.component';
import { TravelRegisterComponent } from './travel-register/travel-register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'travel-select', component: TravelSelectComponent },
  { path: 'travel-register', component: TravelRegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
