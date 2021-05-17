import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OffertService } from 'src/app/services/offert/offert.service';
import { ProductService } from 'src/app/services/product/product.service';
import Swal from 'sweetalert2';
import { Offert } from '../../model/offer/offert.model';
import { Product } from '../../model/product/product.model';
import { UserService } from './../../services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  id = this.act.snapshot.paramMap.get('id');
  Offerts: Offert[];
  Products: Product[];
  userRef: any;

  countProduct: number = 0;
  countOffert: number = 0;

  constructor(public UserService: UserService, private act: ActivatedRoute, private router: Router, public OffertService: OffertService, private ProductService: ProductService) { }

  ngOnInit(): void {
    this.UserService.getUserDoc(this.id).subscribe(res => {
      if(res != undefined ){
        this.offerts(this.id);
        this.offertCount(this.id);
        this.productCount(this.id);
        this.products();
        this.userRef = res[0];
        console.log(this.userRef)
      }
    })
  }

  offerts(id: string)
  {
    this.OffertService.getOffertListForOneUser(id).subscribe(res =>{
      this.Offerts = res.map(e => {
        return {
          id: e.payload.doc.id,
          id_user: e.payload.doc.get('id_user'),
          id_product: e.payload.doc.get('id_product'),
          date: e.payload.doc.get('date'),
          best_offert: e.payload.doc.get('best_offert'),
        } as Offert
      })
    });
  }

  searchOfferts(search : { value: string; })
  {
    if(search.value.length != 0){
      this.OffertService.getOffertsBySearchByProduct(search.value).subscribe(res => {
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

  confirmDeleteOffert(offert)
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

  confirmDeleteProduct(product)
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
        this.ProductService.deleteProduct(product)
      }
    })
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

  offertCount(id)
  {
    this.OffertService.getOffertListForOneUser(id).subscribe(res =>{
      this.countOffert = res.length;
    })
  }

  productCount(id)
  {
    this.ProductService.getProductByUser(id).subscribe(res =>{
      this.countProduct = res.length;
    })
  }
}
