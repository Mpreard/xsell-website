import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OffertService } from 'src/app/services/offert/offert.service';
import { Offert } from '../../model/offer/offert.model'
import { ProductService } from './../../services/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productRef: any;
  Offerts: Offert[];

  constructor(public ProductService: ProductService, private act: ActivatedRoute, private router: Router, public OffertService: OffertService) { }

  ngOnInit(): void {
    const id = this.act.snapshot.paramMap.get('id');

    this.ProductService.getProductDoc(id).subscribe(res => {
      return this.productRef = res;
    })

    this.OffertService.getOfferListForOneProduct(id).subscribe(res =>{
      console.log(res)
      this.Offerts = res.map(e => {
        return {
          createTime: e.payload.doc.get('createTime'),
          price: e.payload.doc.get('price'),
          status: e.payload.doc.get('status'),
          product_id: e.payload.doc.get('product_id'),
          user_id: e.payload.doc.get('user_id')
        } as Offert
      })
    });
  }

}
