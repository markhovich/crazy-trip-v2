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
            }, err => {
              console.error(err);
            }
            )
        }        
      }
    )
  }

  onClick(){
    console.log();
  }

  turnInput(event){
    const el = event.target;
    const text = el.textContent;
    console.log(text)
    console.log(el)
    
    if(el.className == 'plain'){
      el.innerHTML = '<input type="text" value="' + text + '">';
      el.className = 'editable';
    } else {
      el.className = 'plain';
    }
  }

  update(event){
    console.log(event.target)
    const child = document.getElementById('user-email').firstChild;
    const nexText = child
    console.log(nexText);
  }

  gotoList(){
    this.router.navigate(['user-list']);
  }
}
