import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { InterestsComponent } from './components/interests/interests.component';

const routes: Routes = [
	{
		path: 'login',
		component: LoginComponent,
	},
	{
		path: 'home/:id',
		component: HomeComponent,
		children: [
			{
				path: 'interests',
				component: InterestsComponent,
			},
		],
	},
	{
		path: '',
		redirectTo: '/login',
		pathMatch: 'full',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
