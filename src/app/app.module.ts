import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProgramsComponent } from './programs/programs.component';
import { ClassRoomStrategiesComponent } from './class-room-strategies/class-romm-strategies.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'reviews', component: ReviewsComponent},
  { path: 'aboutUs', component: AboutUsComponent},
  { path: 'programs', component: ProgramsComponent},
  { path: 'classRoom', component: ClassRoomStrategiesComponent},
  { path: 'admissions', component: AdmissionsComponent},
  { path: 'contactUs', component: ContactUsComponent },
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
    AboutUsComponent,
    ProgramsComponent,
    ClassRoomStrategiesComponent,
    AdmissionsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
