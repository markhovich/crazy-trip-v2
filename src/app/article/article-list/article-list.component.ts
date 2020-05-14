import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/shared/_services/article/article.service';
import { Subscription } from 'rxjs';
import { Article } from 'src/app/shared/_model/Article';
import { User } from 'src/app/shared/_model/User';
import { AuthService } from 'src/app/shared/_services/auth/auth.service';
import { FileService } from 'src/app/shared/_services/file/file.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  currentUser: User;

  articles: Article[];
  artSub: Subscription;

  images: any[] = [];
  message: string;

  constructor(private as: ArticleService,
    private authService: AuthService,
    private fs: FileService,
    private domSanitizer: DomSanitizer) {
      this.currentUser = this.authService.currentUserValue;
     }

  ngOnInit(): void {
    this.artSub = this.as.getAll().subscribe( (res: Article[]) => {
      this.articles = res;

      for(let article of this.articles){
        this.fs.download(article.id).subscribe(
          res => {
            this.createImageFromBlob(res);
        }, err => {
          console.error(err);
        })
      }

    })
  }

  ngOnDestroy() {
    this.artSub.unsubscribe();
  }

  createImageFromBlob(image: Blob){
    
      let reader = new FileReader();

      reader.addEventListener("load", () => {
      this.images.push(reader.result);
      }, false);

      if (image) {
        reader.readAsDataURL(image);
      }
      //this.images.push(this.domSanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + reader.result));
  }

  displaySearch(search: Article[]){
    this.articles = search;
    if(this.articles.length < 1 ){
      this.message = 'Aucun article ne correspond à la recherche';
    } else {
      this.message = null;
    }
  }
}
