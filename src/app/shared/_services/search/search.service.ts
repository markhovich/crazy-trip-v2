import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  URL_API = 'http://localhost:8080/blog';
  SEARCH_API = this.URL_API + '/search';

  constructor(private http: HttpClient) { }

  getSearch(search: string){
    var param = new HttpParams().set("search", search);
    return this.http.get(this.SEARCH_API, {params: param});
  }
}
