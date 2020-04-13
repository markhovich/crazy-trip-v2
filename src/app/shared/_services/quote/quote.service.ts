import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  QUOTES_API = 'https://bridge.buddyweb.fr/api/citations/citations';
  constructor(private http: HttpClient) { }

  get(){
    return this.http.get(this.QUOTES_API);
  }
}
