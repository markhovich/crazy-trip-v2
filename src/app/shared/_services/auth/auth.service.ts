import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../_model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API = 'http://localhost:8080/blog';
  AUTH_API = this.API + '/auth/';

  private currentUserSubject: BehaviorSubject<User>;
  private currentUser: Observable<User>;

  constructor(private http: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User{
      return this.currentUserSubject.value;
  }

  login(username: string, password: string){
    return this.http.post(this.AUTH_API, {name: username, password: password }).pipe(
      map((user: User) => {
        if(user){
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          location.reload(true);
        }
        return user;
      })
    )
  }

  logout(){
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    location.reload(true);
  }
}
