import { Product } from './../../../model/product/product.model';
import { ProductService } from './../../../services/product/product.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  Products: Product[];

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
          best_offer_id: e.payload.doc.get('best_offer_id'),
          user_id: e.payload.doc.get('user_id'),
          createTime: e.payload.doc.get('createTime'),
          updateTime: e.payload.doc.get('updateTime'),
          ref: e.payload.doc.get('ref'),
          condition: e.payload.doc.get('condition')
        } as Product
      })
    })
  }

  confirmDelete(product)
  {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#28A745',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'The product has been deleted.',
          'success'
        )
        this.ProductService.deleteProduct(product)
      }
    })
  }
}
