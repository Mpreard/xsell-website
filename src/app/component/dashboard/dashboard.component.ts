import { ProductService } from 'src/app/services/product/product.service';
import { Router } from '@angular/router';
import { FirebaseService } from '../../services/firebase/firebase.service';
import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { Product } from 'src/app/model/product/product.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  productSold: number;
  productNoSold: number;
  date: [];
  sold: []; 

  constructor(public FirebaseService : FirebaseService, private router: Router, private productService: ProductService) { 
    const _this = this;
    productService.getProductSold().subscribe(res => { _this.productSold = res.length; });
    productService.getProductNoSold().subscribe(res => { _this.productNoSold = res.length; });
  }


  ngOnInit(): void {
  }


  // Line Chart Offers
  lineChartDataOffers: ChartDataset[] = [
    {data: [0, 0, 1, 3], label: 'Number of offers', pointBackgroundColor: '#11111', borderColor: '#5ac18e', backgroundColor: '#5ac18e'},
  ];

  // Line Chart Products
  lineChartDataProducts: ChartDataset[] = [
    {data: [0, 0, 4, 10], label: 'Number of products', pointBackgroundColor: '#11111', borderColor: '#5ac18e', backgroundColor: '#5ac18e'},
  ];

  // Line Chart Users
  lineChartDataUsers: ChartDataset[] = [
    {data: [0, 0, 3, 2], label: 'Number of users', pointBackgroundColor: '#11111', borderColor: '#5ac18e', backgroundColor: '#5ac18e'},
  ];
  

  lineChartLabels: string[] = ['february','Mars','April', 'May'];

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
  public barChartLabels: string[] = ['2021'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataset[] = [
    { data: [11], label: 'Sold', backgroundColor: '#5ac18e' },
    { data: [4], label: 'In progress', backgroundColor: '#ebec4c' }
  ];
}



