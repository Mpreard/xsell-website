import { Router } from '@angular/router';
import { FirebaseService } from '../../services/firebase/firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public FirebaseService : FirebaseService, private router: Router) { }

  ngOnInit(): void {
  }


}
