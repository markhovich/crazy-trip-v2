import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Globals } from '../../_helpers/globals';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private URL_API = this.global.URL_API + '/categories/';

  constructor(private http: HttpClient,
              private global: Globals) { }

  getAll(){
    return this.http.get(this.URL_API);
  }

  getOne(id: number){
    return this.http.get(this.URL_API + id);
  }

  save(category: string, id?: number){
    if(id){
      return this.http.put(this.URL_API + id, category);
    }
    return this.http.post(this.URL_API, category);
  }

  delete(id: number){
    return this.http.delete(this.URL_API + id);
  }
}
