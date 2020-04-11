import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/_model/User';
import { AuthService } from 'src/app/shared/_services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  //variable dev
  isAdmin: boolean;
  cookieValue: string;

  @Input() currentUser: User;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  logOut(){
    this.authService.logout();
  }

}
