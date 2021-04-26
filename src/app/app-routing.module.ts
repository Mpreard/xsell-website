import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StatsComponent } from '../app/stats/stats.component';

const routes: Routes = [
  { path: 'stats', component: StatsComponent },
  { path: 'home', component: AppComponent },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
