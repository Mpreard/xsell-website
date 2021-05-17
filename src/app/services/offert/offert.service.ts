import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { Offert } from 'src/app/model/offer/offert.model';

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

  getOffertListForOneProduct(productId: string){
    return this.angularFirestore.collection("offerts", ref => ref.where('id_product','==',productId)).snapshotChanges();
  }

  getOffertListForOneUser(userId: string){
    return this.angularFirestore.collection("offerts", ref => ref.where('id_user','==',userId)).snapshotChanges();
  }

  getOffertsBySearch(search)
  {
    return this.angularFirestore
    .collection<Offert>('offerts', ref => { return ref.orderBy('id_user').startAt(search).endAt(search+'\uf8ff') })
    .snapshotChanges();
  }

  getOffertsBySearchByProduct(search)
  {
    return this.angularFirestore
    .collection<Offert>('offerts', ref => { return ref.orderBy('id_product').startAt(search).endAt(search+'\uf8ff') })
    .snapshotChanges();
  }

  deleteOffert(offert) {
    return this.angularFirestore
      .collection("offerts")
      .doc(offert.id)
      .delete();
  }
}
