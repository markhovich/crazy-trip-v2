import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Globals } from '../../_helpers/globals';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  FILE_API = this.global.URL_API + "/files";

  constructor(private http: HttpClient, 
    private global: Globals,
    private domSanitizer: DomSanitizer) { }

  upload(picture: File, idArticle: number){
    var formData = new FormData();
    formData.append('file', picture);

    var id = idArticle.toString();
    formData.append('id', id);

    return this.http.post(this.FILE_API, formData);
  }

  download(id: number){
    let headers = new HttpHeaders({
      'Content-Type':  'image/jpeg',
      responseType : 'blob',
      Accept : 'image/jpeg',
      observe : 'response'
    })
    return this.http.get(this.FILE_API + '/' + id, {headers: headers, responseType: 'blob'});
  }

  createImageFromBlob(image: Blob){
    let reader = new FileReader();
    var imageToShow
    reader.addEventListener("load", () => {
      imageToShow = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
    
    return imageToShow = this.domSanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + reader.result);
    }
}
