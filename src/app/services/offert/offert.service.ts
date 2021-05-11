import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class OffertService {

  constructor(private angularFirestore: AngularFirestore) { }

  getOffertDoc(id)
  {
    return this.angularFirestore
    .collection('offerts')
    .doc(id)
    .valueChanges();
  }

  getOffertsList()
  {
    return this.angularFirestore
    .collection("offerts")
    .snapshotChanges();
  }

  getOfferListForOneProduct(productId: string):Observable<any>{
    return this.angularFirestore.collection<any>("offerts", ref => ref.where('product_id','==',productId)).valueChanges();
  }
}
