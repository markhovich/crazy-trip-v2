import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { QuoteService } from 'src/app/shared/_services/quote/quote.service';
import { ArticleService } from 'src/app/shared/_services/article/article.service';
import { UserService } from 'src/app/shared/_services/user/user.service';
import { CommentService } from 'src/app/shared/_services/comment/comment.service';
import { Article } from 'src/app/shared/_model/Article';
import { User } from 'src/app/shared/_model/User';
import { Comment } from 'src/app/shared/_model/Comment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  quoteSub: Subscription;
  quote: any;

  nbCom: number;
  nbUsers: number;
  nbArticles: number;
  nbCategories: number;

  lastArt: Article;
  lastUser: User;
  lastCom: Comment;

  constructor(private qs: QuoteService,
    private as: ArticleService,
    private us: UserService,
    private cs: CommentService) { }

  ngOnInit(): void {
    this.quoteSub = this.qs.get().subscribe( res => {
      this.quote = res[0];
    })

    this.as.getAll().subscribe( (res: Article[]) =>{
      this.nbArticles = res.length
      this.lastArt = res[0];
      }
    )

    this.us.getAll().subscribe( (res: User[]) =>{
      this.nbUsers = res.length
      this.lastUser = res[0];
      }
    )

    this.cs.getAll().subscribe( (res: Comment[]) =>{
      this.nbCom = res.length
      this.lastCom = res[0];
      }
    )

  }

}
