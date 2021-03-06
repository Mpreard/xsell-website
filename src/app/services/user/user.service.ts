import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../../model/user/user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private angularFirestore: AngularFirestore) {}

  getUserDoc(id) {
    return this.angularFirestore
    .collection('users', ref => ref.where('uid', '==', id))
    .valueChanges();
  }

  getUserByEmail(email)
  {
    return this.angularFirestore
    .collection('users', ref => ref.where('email', '==', email))
    .snapshotChanges();
  }

  getUserList() { 
    return this.angularFirestore
    .collection("users", ref => ref.where('role','!=', 1))
    .snapshotChanges();
  }

  getUserBySearch(search)
  {
    return this.angularFirestore
    .collection<User>('users', ref => { return ref.orderBy('uid').startAt(search).endAt(search+'\uf8ff') })
    .snapshotChanges();
  }

  deleteUser(user) {
    return this.angularFirestore
      .collection("users")
      .doc(user.id)
      .delete();
  }
}