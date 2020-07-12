import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { FooterComponent } from './footer/footer.component';
import { TeachersComponent } from './teachers/teachers.component';
import { ProgramsComponent } from './programs/programs.component';
import { AboutusComponent } from './about-us/about-us.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { TuitionComponent } from './tuition/tuition.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { Covid19Component } from './covid-19/covid-19.component';
import { OnlineClassesComponent } from './covid-19/online-classes/online-classes.component';

import { AdmissionsService } from './services/admissions.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'reviews', component: ReviewsComponent},
  { path: 'teachers', component: TeachersComponent},
  { path: 'programs', component: ProgramsComponent},
  { path: 'aboutus', component: AboutusComponent},
  { path: 'admissions', component: AdmissionsComponent},
  { path: 'tuition', component: TuitionComponent},
  { path: 'covid-19', component: Covid19Component},
  { path: 'covid-19/our-measures', component: Covid19Component},
  { path: 'covid-19/online-classes', component: OnlineClassesComponent},
  { path: 'contact-us', component: ContactUsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NavigationComponent,
    ReviewsComponent,
    FooterComponent,
    TeachersComponent,
    ProgramsComponent,
    AboutusComponent,
    AdmissionsComponent,
    TuitionComponent,
    ContactUsComponent,
    Covid19Component,
    OnlineClassesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [AdmissionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
