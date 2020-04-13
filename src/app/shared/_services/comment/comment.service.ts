import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../../_model/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  URL_API = 'http://localhost:8080/blog';
  COM_API = this.URL_API + '/comments/';

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(this.COM_API);
  }

  getByArticle(id: number){
    return this.http.get(this.COM_API + id);
  }

  save(com: Comment, id?: number){

    if(id){
      return this.http.put(this.COM_API + id, com);
    } else {
      return this.http.post(this.COM_API, com);
    }
  }

  delete(id: number){
    return this.http.delete(this.COM_API + id);
  }
}
