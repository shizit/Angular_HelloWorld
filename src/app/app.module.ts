import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { TravelSelectComponent } from './components/travel-select/travel-select.component';
import { TravelRegisterComponent } from './components/travel-register/travel-register.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';
import { CandidateDetailComponent } from './components/candidate-detail/candidate-detail.component';
import { CandidateEditComponent } from './components/candidate-edit/candidate-edit.component';
import { NavibarComponent } from './components/navibar/navibar.component';
import { RankingAllComponent } from './components/ranking-all/ranking-all.component';
import { RankingPersonalComponent } from './components/ranking-personal/ranking-personal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TravelSelectComponent,
    TravelRegisterComponent,
    HeaderComponent,
    LoginModalComponent,
    CandidateListComponent,
    CandidateDetailComponent,
    CandidateEditComponent,
    NavibarComponent,
    RankingAllComponent,
    RankingPersonalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
