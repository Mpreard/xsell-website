import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OffertService } from 'src/app/services/offert/offert.service';
import Swal from 'sweetalert2';
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
  id = this.act.snapshot.paramMap.get('id');


  constructor(public ProductService: ProductService, private act: ActivatedRoute, private router: Router, public OffertService: OffertService) { }

  ngOnInit(): void {

    this.ProductService.getProductDoc(this.id).subscribe(res => {
      if(res != undefined ){
        this.offerts(this.id);
        return this.productRef = res;
      } else {
        this.router.navigate(['product-not-found']);
      }
    })
  }

  offerts(id: string)
  {
    this.OffertService.getOffertListForOneProduct(id).subscribe(res =>{
      this.Offerts = res.map(e => {
        return {
          id: e.payload.doc.id,
          createTime: e.payload.doc.get('createTime'),
          price: e.payload.doc.get('price'),
          status: e.payload.doc.get('status'),
          product_id: e.payload.doc.get('product_id'),
          user_id: e.payload.doc.get('user_id')
        } as Offert
      })
    });
  }

  searchOfferts(search : { value: string; })
  {
    if(search.value.length != 0){
      this.OffertService.getOffertsBySearch(search.value).subscribe(res => {
        this.Offerts = res.map(e => {
          return {
            id: e.payload.doc.id,
            createTime: e.payload.doc.get('createTime'),
            price: e.payload.doc.get('price'),
            status: e.payload.doc.get('status'),
            product_id: e.payload.doc.get('product_id'),
            user_id: e.payload.doc.get('user_id')
          } as Offert
        })
      })
    } else {
      this.offerts(this.id);
    }
  }

  confirmDelete(offert)
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
          'The offert has been deleted.',
          'success'
        )
        this.OffertService.deleteOffert(offert)
      }
    })
  }
}
