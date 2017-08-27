import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { FooterComponent } from './footer/footer.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'reviews', component: ReviewsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NavigationComponent,
    ReviewsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
