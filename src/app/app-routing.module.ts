import { LogoutComponent } from './component/logout/logout.component';
import { ListProductComponent } from './component/product/list-product/list-product.component';
import { ConnectionComponent } from './component/connection/connection.component';
import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProductComponent } from './component/product/product.component';
import { ListUserComponent } from './component/user/list-user/list-user.component';
import { UserComponent } from './component/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'login', component: ConnectionComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'products', component: ListProductComponent, canActivate: [AuthGuard]},
  { path: 'product/:id', component: ProductComponent, canActivate: [AuthGuard], pathMatch: 'full'},
  { path: 'users', component: ListUserComponent, canActivate: [AuthGuard]},
  { path: 'user/:id', component: UserComponent, canActivate: [AuthGuard], pathMatch: 'full'},
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard]},
  { path: '**', component: PageNotFoundComponent}
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
