import { UserService } from './../user/user.service';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  isLoggedIn: boolean = false;
  email: string;
  role: number;
  Admin: any;

  constructor(public firebaseAuth: AngularFireAuth, private UserService: UserService) { }

  async signin(email: string, password: string){
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
    .then(res=>{
      this.UserService.getUserByEmail(email).subscribe(data => {
        this.Admin = data.map(e => {
          this.role = e.payload.doc.get('role')
          console.log(this.role)
          if(this.role === 1){
            this.isLoggedIn = true;
            localStorage.setItem('user', JSON.stringify(res.user));
          } else {
            this.logout()
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!'
            })
          }
        }) 
      }) 
    })
  }

  logout(){
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
  }
}
