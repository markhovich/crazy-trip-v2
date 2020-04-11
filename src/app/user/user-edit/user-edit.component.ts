import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/shared/_model/User';
import { UserService } from 'src/app/shared/_services/user/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  user: User;
  userSub: Subscription;
  name: string;

  constructor(private us: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userSub = this.route.params.subscribe(
      (params) => {
        this.name = params['name']
        if(this.name){
          this.us.getByName(this.name).subscribe(
            (res: User) => {
              if(res) {
                this.user = res;
              }
              else {
                console.log("Utilisateur introuvable");
                this.gotoList();
              }
            }
            )
        }        
      }
    )
  }

  onClick(){
    console.log();
  }

  gotoList(){
    this.router.navigate(['user-list']);
  }
}
