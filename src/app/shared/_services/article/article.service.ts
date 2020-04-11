import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from 'src/app/shared/_model/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  URL_API = 'http://localhost:8080/blog';
  ART_API = this.URL_API + '/articles';

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(this.ART_API);
  }

  get(id: number): Observable<any>{
    return this.http.get(this.ART_API + '/' + id);
  }

  getSearched(search: string){
    var param = new HttpParams().set("search", search);
    return this.http.get(this.URL_API + '/article', {params: param});
  }

  save(art: Article, id: number): Observable<any>{
    if(id>0){
      return this.http.put(this.ART_API + '/' + id, art);
    } else {
      return this.http.post(this.ART_API, art);
    }
  }

  delete(id: number): Observable<any>{
    return this.http.delete(this.ART_API + '/' + id);
  }

}
