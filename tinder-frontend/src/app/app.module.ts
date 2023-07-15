import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './pages/home/home.component';
import { ProfilesSectionComponent } from './components/profiles-section/profiles-section.component';
import { LoginComponent } from './pages/login/login.component';
import { InterestsComponent } from './components/interests/interests.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatchesSectionComponent } from './components/matches-section/matches-section.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		HomeComponent,
		ProfilesSectionComponent,
		LoginComponent,
		InterestsComponent,
  FooterComponent,
  MatchesSectionComponent,
	],
	imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
