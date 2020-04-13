import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Article } from 'src/app/shared/_model/Article';
import { ArticleService } from 'src/app/shared/_services/article/article.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article-single',
  templateUrl: './article-single.component.html',
  styleUrls: ['./article-single.component.scss']
})
export class ArticleSingleComponent implements OnInit, OnDestroy {

  artSub: Subscription;
  article: Article = {};
  articleId: number;

  constructor(private as: ArticleService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.artSub = this.route.params.subscribe(params => {
      this.articleId = params['id'];
      if(this.articleId){
        this.as.get(this.articleId).subscribe(res => {
          if(res){
            this.article = res;
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

  gotoList(){
    this.router.navigate(['articles']);
  }
}
