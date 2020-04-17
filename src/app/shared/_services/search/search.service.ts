import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Globals } from '../../_helpers/globals';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  SEARCH_API = this.global.URL_API + '/search';

  constructor(private http: HttpClient,
    private global: Globals) { }

  getSearch(search: string){
    var param = new HttpParams().set("search", search);
    return this.http.get(this.SEARCH_API, {params: param});
  }
}
