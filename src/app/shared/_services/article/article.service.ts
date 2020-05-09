import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from 'src/app/shared/_model/Article';
import { Globals } from '../../_helpers/globals';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  ART_API = this.global.URL_API + '/articles/';

  constructor(private http: HttpClient,
    private global: Globals) { }

  getAll(){
    return this.http.get(this.ART_API);
  }

  get(id: number): Observable<any>{
    return this.http.get(this.ART_API +  id);
  }

  getSearched(search: string){
    var param = new HttpParams().set("search", search);
    return this.http.get(this.ART_API + 'search', {params: param});
  }

  save(art: Article, id: number): Observable<any>{
    if(!art.image){
      art.image = './assets/images/articles/sancy.jpg';
    }

    if(id>0){
      return this.http.put(this.ART_API + id, art);
    } else {
      return this.http.post(this.ART_API, art);
    }
  }

  delete(id: number): Observable<any>{
    return this.http.delete(this.ART_API + id);
  }

}
