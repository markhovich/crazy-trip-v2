import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/_model/User';
import { AuthService } from 'src/app/shared/_services/auth/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() currentUser: User;

  constructor(private authService: AuthService,
      private router: Router) { }

  ngOnInit(): void {
  }

  logOut(){
    this.authService.logout();
  }

  onSubmit(f: NgForm){
    this.router.navigate(['/search/' + f.value.search]);
  }
}
