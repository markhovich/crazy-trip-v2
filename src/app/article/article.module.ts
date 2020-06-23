import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleListComponent } from './article-list/article-list.component';
import { routing } from './article.routing.';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { ArticleSingleComponent } from './article-single/article-single.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticleSearchComponent } from './article-search/article-search.component';
import { CommentModule } from '../comment/comment.module';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    CommentModule,
    NgSelectModule
  ],
  declarations: [
    ArticleListComponent,
    ArticleEditComponent,
    ArticleSingleComponent,
    ArticleSearchComponent
  ],
  exports: [
    ArticleListComponent,
    ArticleSearchComponent,
    ArticleSingleComponent,
    ArticleEditComponent
  ]

})
export class ArticleModule { }
