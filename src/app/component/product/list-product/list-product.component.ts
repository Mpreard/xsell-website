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
    this.products();
  }

  products() 
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
          create_at: e.payload.doc.get('create_at'),
          ref: e.payload.doc.get('ref'),
          condition: e.payload.doc.get('condition'),
          date_limit: e.payload.doc.get('date_limit'),
          sold: e.payload.doc.get('sold')
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

  searchProducts(searchProduct: { value: string; })
  {
    if(searchProduct.value.length != 0){
      this.ProductService.getProductBySearch(searchProduct.value).subscribe(res => {
        this.Products = res.map(e => {
          return {
            id: e.payload.doc.id,
            name: e.payload.doc.get('name'),
            description: e.payload.doc.get('description'),
            price: e.payload.doc.get('price'),
            best_offer_id: e.payload.doc.get('best_offer_id'),
            user_id: e.payload.doc.get('user_id'),
            create_at: e.payload.doc.get('create_at'),
            ref: e.payload.doc.get('ref'),
            condition: e.payload.doc.get('condition'),
            date_limit: e.payload.doc.get('date_limit'),
            sold: e.payload.doc.get('sold')
          } as Product
        })
      })
    } else {
      this.products();
    }
  }
}
