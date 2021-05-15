import { FirebaseService } from './services/firebase/firebase.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';

  @Output() isLogout = new EventEmitter<void>()

  constructor(public FirebaseService : FirebaseService, private router: Router){
  }
  
  logout(){
    this.FirebaseService.logout();
    this.isLogout.emit();
    this.router.navigate(['login']);
  }

  hasRoute(route: string)
  {
    return this.router.url.includes(route);
  }

  ngOnInit(){
  }

}