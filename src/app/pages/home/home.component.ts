import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/shared/_model/Article';
import { Subscription } from 'rxjs';
import { User } from 'src/app/shared/_model/User';
import { ArticleService } from 'src/app/shared/_services/article/article.service';
import { AuthService } from 'src/app/shared/_services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentUser: User;

  articles: Article[];
  artSub: Subscription;

  constructor(private as: ArticleService,
    private authService: AuthService) {
      this.currentUser = this.authService.currentUserValue;
     }

  ngOnInit(): void {
    this.artSub = this.as.getAll().subscribe( (res: Article[]) => {
      this.articles = res.slice(0,3);
    })
  }

  ngOnDestroy() {
    this.artSub.unsubscribe();
  }
}
