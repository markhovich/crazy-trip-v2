import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../../_model/User';
import { Globals } from '../../_helpers/globals';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  USER_API = this.global.URL_API + '/users/';

  constructor(private http: HttpClient,
    private global: Globals) { }

  getAll(){
    return this.http.get(this.USER_API);
  }

  get(id: number){
    return this.http.get(this.USER_API + id)
  }

  getByName(name: string){
    var param = new HttpParams().set("name", name);
    return this.http.get(this.USER_API + 'name', {params: param})
  }

  register(user: User){
    return this.http.post(this.USER_API, user);
  }

  delete(id: number){
    return this.http.delete(this.USER_API + id)
  }
}
