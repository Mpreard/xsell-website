import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './../../model/product/product.model';
import { ProductService } from './../../services/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productRef: any;

  constructor(public ProductService: ProductService, private act: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.act.snapshot.paramMap.get('id');

    this.ProductService.getProductDoc(id).subscribe(res => {
      return this.productRef = res;
    })
  }

}
