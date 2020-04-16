import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/_model/User';
import { AuthService } from 'src/app/shared/_services/auth/auth.service';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.scss']
})
export class UserSingleComponent implements OnInit {

  currentUser: User;

  constructor(private authService: AuthService) { 
    this.currentUser = this.authService.currentUserValue;
  }

  ngOnInit(): void {
  }

}
