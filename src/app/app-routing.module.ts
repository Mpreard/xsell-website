import { HomeComponent } from './home/home.component';
import { ConnectionComponent } from './connection/connection.component';
import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StatsComponent } from '../app/stats/stats.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: ConnectionComponent},
  { path: 'stats', component: StatsComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
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
