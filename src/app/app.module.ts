import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { TravelSelectComponent } from './travel-select/travel-select.component';
import { TravelRegisterComponent } from './travel-register/travel-register.component';
import { HeaderComponent } from './header/header.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { CandidateDetailComponent } from './candidate-detail/candidate-detail.component';
import { CandidateEditComponent } from './candidate-edit/candidate-edit.component';
import { NavibarComponent } from './navibar/navibar.component';
import { RankingAllComponent } from './ranking-all/ranking-all.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ListComponent,
    TravelSelectComponent,
    TravelRegisterComponent,
    HeaderComponent,
    LoginModalComponent,
    CandidateListComponent,
    CandidateDetailComponent,
    CandidateEditComponent,
    NavibarComponent,
    RankingAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
