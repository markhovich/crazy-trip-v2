import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/shared/_services/article/article.service';
import { Subscription } from 'rxjs';
import { Article } from 'src/app/shared/_model/Article';
import { User } from 'src/app/shared/_model/User';
import { AuthService } from 'src/app/shared/_services/auth/auth.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  currentUser: User;

  articles: Article[];
  artSub: Subscription;

  message: string;

  constructor(private as: ArticleService,
    private authService: AuthService) {
      this.currentUser = this.authService.currentUserValue;
     }

  ngOnInit(): void {
    this.artSub = this.as.getAll().subscribe( (res: Article[]) => {
      this.articles = res;
    })
  }

  ngOnDestroy() {
    this.artSub.unsubscribe();
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
