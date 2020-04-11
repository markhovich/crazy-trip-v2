import { Component } from '@angular/core';
import { AuthService } from './shared/_services/auth/auth.service';
import { User } from './shared/_model/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Blog Voyage';

  currentUser: User;

  constructor(private authService: AuthService){
    this.currentUser = this.authService.currentUserValue;
  }

  
}
