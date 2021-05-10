import { Product } from './../../../model/product/product.model';
import { ProductService } from './../../../services/product/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  Products: Product[];
  isShow: boolean = false;

  constructor(private ProductService: ProductService) { }

  ngOnInit(): void 
  {
    this.ProductService.getProductList().subscribe(res => {
      this.Products = res.map(e => {
        return {
          id: e.payload.doc.id,
          name: e.payload.doc.get('name'),
          description: e.payload.doc.get('description'),
          price: e.payload.doc.get('price'),
          scale: e.payload.doc.get('scale'),
          best_offer_id: e.payload.doc.get('best_offer_id'),
          user_id: e.payload.doc.get('user_id'),
        } as Product
      })
    })
  }

  toggleDisplay()
  {
    this.isShow = !this.isShow;
  }

  removeProduct = product => this.ProductService.deleteProduct(product);

}
