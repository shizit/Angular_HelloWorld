import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component'; 
import { HomeComponent } from './components/home/home.component';
import { TravelSelectComponent } from './components/travel-select/travel-select.component';
import { TravelRegisterComponent } from './components/travel-register/travel-register.component';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';
import { CandidateDetailComponent } from './components/candidate-detail/candidate-detail.component';
import { CandidateEditComponent } from './components/candidate-edit/candidate-edit.component';
import { RankingAllComponent } from './components/ranking-all/ranking-all.component';
import { RankingPersonalComponent } from './components/ranking-personal/ranking-personal.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'travel-select', component: TravelSelectComponent, canActivate: [AuthGuard] },
  { path: 'travel-register', component: TravelRegisterComponent },
  { path: 'candidate-list', component: CandidateListComponent },
  { path: 'candidate-detail', component: CandidateDetailComponent },
  { path: 'candidate-edit', component: CandidateEditComponent },
  { path: 'ranking-all', component: RankingAllComponent },
  { path: 'ranking-personal', component: RankingPersonalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
