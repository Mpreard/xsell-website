import { Router } from '@angular/router';
import { FirebaseService } from './../services/firebase.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public FirebaseService : FirebaseService, private router: Router) { }

  @Output() isLogout = new EventEmitter<void>()
  ngOnInit(): void {
  }

  logout(){
    this.FirebaseService.logout();
    this.isLogout.emit();
    this.router.navigate(['']);
  }

}
