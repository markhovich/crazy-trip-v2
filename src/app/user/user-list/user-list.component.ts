import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/_model/User';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/shared/_services/user/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[];
  userSub: Subscription;

  constructor(private us: UserService) { }

  ngOnInit(): void {
    this.userSub = this.us.getAll().subscribe(
      (res: User[]) => { 
        this.users = res;
      },
      error => { 
        console.error(error)
      }
    )
  }

  onDelete(user: User){
    if(confirm('Voulez-vous supprimer définitivement cet utilisateur ?')){
      this.us.delete(user.id).subscribe(
        (res) => {
          var index = this.users.indexOf(user);
          this.users.splice(index, 1);
        },
        (error) => {
          console.error(error);
        })
    }
  }
}
