import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  title = 'firebase-angular-auth';
  isSignedIn = false;

  constructor(public firebaseService : FirebaseService, private router: Router){}

  ngOnInit(): void{
    if(localStorage.getItem('user')!== null){
      this.isSignedIn = true
    } else {
      this.isSignedIn = false
    }
  }

  async onSignin(email:string,password:string){
    await this.firebaseService.signin(email,password)
    if(this.firebaseService.isLoggedIn){
      this.isSignedIn = true;
      this.router.navigate(['home']);
    }
  }

  handleLogout(){
    this.isSignedIn = false
  }
}

