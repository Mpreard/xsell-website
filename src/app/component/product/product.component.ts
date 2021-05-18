import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
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
  offertCount: number;
  id = this.act.snapshot.paramMap.get('id');

  documentProductId: string;
  productId: string;
  createTime: object;
  price: number;



  constructor(public ProductService: ProductService, private act: ActivatedRoute, private router: Router, public OffertService: OffertService) { }

  ngOnInit(): void {

    this.ProductService.getProductDoc(this.id).subscribe(res => {
      if(res != undefined ){
        this.offerts(this.id);
        return this.productRef = res;
      }
    })
  }

  offerts(id: string)
  {
    this.OffertService.getOffertListForOneProduct(id).subscribe(res =>{
      this.Offerts = res.map(e => {
        return {
          id: e.payload.doc.id,
          id_user: e.payload.doc.get('id_user'),
          id_product: e.payload.doc.get('id_product'),
          date: e.payload.doc.get('date'),
          best_offert: e.payload.doc.get('best_offer'),
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
            id_user: e.payload.doc.get('id_user'),
            id_product: e.payload.doc.get('id_product'),
            date: e.payload.doc.get('date'),
            best_offert: e.payload.doc.get('best_offert'),
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

  showOffert(offert)
  {
    Swal.fire({
      icon: 'info',
      title: 'Informations',
      html: `<ul class="mb-3" style="list-style: none;">
                <li class="mb-2"> <b>Offert_id</b> : ` + offert.id + `</li>
                <li class="mb-2"> <b>User_id</b> : ` + offert.id_user + `</li> 
                <li class="mb-2"> <b>Product_id</b> : ` + offert.id_product + `</li> 
                <li class="mb-2"> <b>Price</b> : ` + offert.best_offer + `</li>  
             </ul>`,
    })
  }
}
