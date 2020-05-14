import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Article } from 'src/app/shared/_model/Article';
import { ArticleService } from 'src/app/shared/_services/article/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FileService } from 'src/app/shared/_services/file/file.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-article-single',
  templateUrl: './article-single.component.html',
  styleUrls: ['./article-single.component.scss']
})
export class ArticleSingleComponent implements OnInit, OnDestroy {

  artSub: Subscription;
  article: Article = {};
  comments: Comment[];
  articleId: number;
  image;

  constructor(private as: ArticleService,
    private route: ActivatedRoute,
    private router: Router,
    private fs: FileService,
    private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.artSub = this.route.params.subscribe(params => {
      this.articleId = params['id'];
      if(this.articleId){
        this.as.get(this.articleId).subscribe(res => {
          if(res){
            this.article = res;
            this.comments = this.article.comments;

            this.fs.download(this.article.id).subscribe(res => {
              this.image = this.createImageFromBlob(res);
              console.log(this.image);
            }, err => {
              console.error(err);
            })
          } else {
            console.log('Article introuvable, retour à la liste');
            this.gotoList();
          }
        });
      }
    })
  }

  ngOnDestroy() {
    this.artSub.unsubscribe();
  }

  createImageFromBlob(image: Blob){
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.image = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
    
    this.image = this.domSanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + reader.result);
    }

  gotoList(){
    this.router.navigate(['articles']);
  }
}
