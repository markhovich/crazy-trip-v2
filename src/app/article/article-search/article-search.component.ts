import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ArticleService } from 'src/app/shared/_services/article/article.service';
import { Subscription } from 'rxjs';
import { Article } from 'src/app/shared/_model/Article';

@Component({
  selector: 'app-article-search',
  templateUrl: './article-search.component.html',
  styleUrls: ['./article-search.component.scss']
})
export class ArticleSearchComponent implements OnInit {

  artSub: Subscription;
  searchResults = {};
  @Output() results = new EventEmitter<Article>();
  query: string = null;

  constructor(private as: ArticleService) { }

  ngOnInit(): void {
  }

  onSearch(){
    this.artSub = this.as.getSearched(this.query).subscribe( res => {
      this.searchResults = res;
      this.results.emit(this.searchResults);
    })
  }

}
