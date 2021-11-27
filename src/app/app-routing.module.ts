import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; 
import { HomeComponent } from './home/home.component';
import { TravelSelectComponent } from './travel-select/travel-select.component';
import { TravelRegisterComponent } from './travel-register/travel-register.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { CandidateDetailComponent } from './candidate-detail/candidate-detail.component';
import { CandidateEditComponent } from './candidate-edit/candidate-edit.component';
import { RankingAllComponent } from './ranking-all/ranking-all.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'travel-select', component: TravelSelectComponent },
  { path: 'travel-register', component: TravelRegisterComponent },
  { path: 'candidate-list', component: CandidateListComponent },
  { path: 'candidate-detail', component: CandidateDetailComponent },
  { path: 'candidate-edit', component: CandidateEditComponent },
  { path: 'ranking-all', component: RankingAllComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
