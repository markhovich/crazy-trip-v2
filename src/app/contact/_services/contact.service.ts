import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  API_URL = 'http://localhost:8080/blog/';
  CONTACT_API = this.API_URL + 'messages/';

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(this.CONTACT_API);
  }

  save(mes){
    return this.http.post(this.CONTACT_API, mes);
  }
}
