import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent }      from './auth/auth.component';
import {HomeComponent} from "./home/home.component";

// Prepare routes for application
const routes: Routes = [
  	{ path: '', component: HomeComponent },
  	{ path: 'auth', component: AuthComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
