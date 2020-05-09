import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../../_model/Comment';
import { Globals } from '../../_helpers/globals';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  COM_API = this.global.URL_API + '/comments/';

  constructor(private http: HttpClient,
    private global: Globals) { }

  getAll(){
    return this.http.get(this.COM_API);
  }

  getByArticle(id: number){
    return this.http.get(this.COM_API + id);
  }

  save(com: Comment, id?: number){
    console.log(com);
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
