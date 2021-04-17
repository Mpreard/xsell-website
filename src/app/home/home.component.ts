import { FirebaseService } from './../services/firebase.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public FirebaseService: FirebaseService) { }

  @Output() isLogout = new EventEmitter<void>()
  ngOnInit(): void {
  }

  logout(){
    this.FirebaseService.logout();
    this.isLogout.emit();
  }

}
