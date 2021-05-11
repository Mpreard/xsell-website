import { Router } from '@angular/router';
import { FirebaseService } from '../../services/firebase/firebase.service';
import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public FirebaseService : FirebaseService, private router: Router) { 
  }

  ngOnInit(): void {
  }

  // Line Chart
  lineChartData: ChartDataset[] = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices', pointBackgroundColor: '#11111', borderColor: '#00000'  },
  ];

  lineChartLabels: string[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';


  // Autre 
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataset[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];
}



