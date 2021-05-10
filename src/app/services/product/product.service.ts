import { Product } from './../../model/product/product.model';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private angularFirestore: AngularFirestore) { }

  getProductDoc(id)
  {
    return this.angularFirestore
    .collection('product')
    .doc(id)
    .valueChanges();
  }

  getProductList()
  {
    return this.angularFirestore
    .collection("product")
    .snapshotChanges();
  }

  deleteProduct(product) {
    return this.angularFirestore
      .collection("product")
      .doc(product.id)
      .delete();
  }
}
