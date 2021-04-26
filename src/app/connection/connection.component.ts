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
  isClickSignUp = false;
  isClickSignIn = false;

  constructor(public firebaseService : FirebaseService){}
  ngOnInit(): void{
    if(localStorage.getItem('user')!== null)
    this.isSignedIn= true
    else
    this.isSignedIn = false
  }

  async onSignup(email:string,password:string){
    await this.firebaseService.signup(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
  }

  async onSignin(email:string,password:string){
    await this.firebaseService.signin(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
  }

  handleLogout(){
    this.isSignedIn = false
  }

  displaySignUp(){
    if(this.isClickSignUp === false){
      this.isClickSignUp = true;
    } else {
      this.isClickSignUp = false;
    }
    console.log(this.isClickSignUp)
  }

  displaySignIn(){
    if(this.isClickSignIn === false){
      this.isClickSignIn = true;
    } else {
      this.isClickSignIn = false;
    }
    console.log(this.isClickSignIn)
  }
}

