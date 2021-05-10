import { FirebaseService } from './services/firebase.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire'
import { AngularFirestore } from '@angular/fire/firestore';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StatsComponent } from './stats/stats.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConnectionComponent } from './connection/connection.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StatsComponent,
    ConnectionComponent,
    PageNotFoundComponent
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
    AppRoutingModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
