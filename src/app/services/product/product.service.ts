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
    .collection('products')
    .doc(id)
    .valueChanges();
  }

  getProductList()
  {
    return this.angularFirestore
    .collection("products")
    .snapshotChanges();
  }

  getProductByUser(id)
  {
    return this.angularFirestore
    .collection("products", ref => ref.where('user_id','==',id))
    .snapshotChanges();
  }

  getProductBySearch(search)
  {
    return this.angularFirestore
    .collection<Product>('products', ref => { return ref.orderBy('name').startAt(search).endAt(search+'\uf8ff') })
    .snapshotChanges();
  }

  deleteProduct(product) {
    return this.angularFirestore
      .collection("products")
      .doc(product.id)
      .delete();
  }

  getProductSold()
  {
    return this.angularFirestore
    .collection("products", ref => ref.where('sold','==',true))
    .snapshotChanges();
  }

  getProductNoSold()
  {
    return this.angularFirestore
    .collection("products", ref => ref.where('sold','!=',true))
    .snapshotChanges();
  }
}
