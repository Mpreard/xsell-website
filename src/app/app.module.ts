import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire'
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';

import { FirebaseService } from './services/firebase/firebase.service';
import { ProductService } from './services/product/product.service';

import { AppComponent } from './app.component';
import { ConnectionComponent } from './component/connection/connection.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ListProductComponent } from './component/product/list-product/list-product.component';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { ChartsModule } from 'ng2-charts';
import { ProductComponent } from './component/product/product.component';
import { ListUserComponent } from './component/user/list-user/list-user.component';
import { UserComponent } from './component/user/user.component';
import { LogoutComponent } from './component/logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    PageNotFoundComponent,
    DashboardComponent,
    ListProductComponent,
    ProductComponent,
    ListUserComponent,
    UserComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCKUfdl0I6VAhEVxNWVikZ1yincPcTePNs",
      authDomain: "xsell-16be6.firebaseapp.com",
      projectId: "xsell-16be6",
      storageBucket: "xsell-16be6.appspot.com",
      messagingSenderId: "299676784252",
      appId: "1:299676784252:web:1f7a015a6c380dd394dbf9"
    }),
    AngularFirestoreModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ChartsModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
