import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../_services/auth/auth.service';

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {

    constructor(private authService: AuthService,
        private router: Router){}

    canActivate(){
        const currentUser = this.authService.currentUserValue;
        if (currentUser && currentUser.role == 2) {
            return true;
        }

        this.router.navigate(['/home']);
        return false;
    }
}