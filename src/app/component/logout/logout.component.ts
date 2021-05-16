import { FirebaseService } from './../../services/firebase/firebase.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  @Output() isLogout = new EventEmitter<void>()

  constructor(public FirebaseService : FirebaseService, private router: Router) { }

  ngOnInit(): void {
      this.FirebaseService.logout();
      this.isLogout.emit();
      this.router.navigate(['login']);
  }

}
