import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { User } from '../../../model/user/user.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})

export class ListUserComponent implements OnInit {
  Users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users();
  }

  users()
  {
    this.userService.getUserList().subscribe(res => {
      this.Users = res.map(e => {
        return {
          id: e.payload.doc.id,
          name: e.payload.doc.get('name'),
          email: e.payload.doc.get('email'),
          dob: e.payload.doc.get('dob'),
          phone:  e.payload.doc.get('phone'),
          address_line: e.payload.doc.get('address_line'),
          city: e.payload.doc.get('city'),
          zip: e.payload.doc.get('zip'),
          state: e.payload.doc.get('state'),
          role: e.payload.doc.get('role'),
          valid: e.payload.doc.get('valid'),
          uid: e.payload.doc.get('uuid')
        } as User;
      })
    });    
  }

  searchUser(search : { value: string; })
  {
    if(search.value.length != 0){
      this.userService.getUserBySearch(search.value).subscribe(res => {
        this.Users = res.map(e => {
          return {
            id: e.payload.doc.id,
          name: e.payload.doc.get('name'),
          email: e.payload.doc.get('email'),
          dob: e.payload.doc.get('dob'),
          phone:  e.payload.doc.get('phone'),
          address_line: e.payload.doc.get('address_line'),
          city: e.payload.doc.get('city'),
          zip: e.payload.doc.get('zip'),
          state: e.payload.doc.get('state'),
          role: e.payload.doc.get('role'),
          valid: e.payload.doc.get('valid'),
          uid: e.payload.doc.get('uuid')
          } as User
        })
      })
    } else {
      this.users();
    }
  }

  confirmDelete(user)
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
          'The user has been deleted.',
          'success'
        )
        this.userService.deleteUser(user)
      }
    })
  }

  removeUser = user => this.userService.deleteUser(user);
}