import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
import { ContactUsComponent } from './contact-us/contact-us.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'reviews', component: ReviewsComponent},
  { path: 'teachers', component: TeachersComponent},
  { path: 'programs', component: ProgramsComponent},
  { path: 'aboutus', component: AboutusComponent},
  { path: 'admissions', component: AdmissionsComponent},
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
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
