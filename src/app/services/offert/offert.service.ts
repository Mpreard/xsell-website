import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

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

  getProductList()
  {
    return this.angularFirestore
    .collection("offerts")
    .snapshotChanges();
  }
}
