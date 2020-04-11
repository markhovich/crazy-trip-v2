import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentListComponent } from './comment-list/comment-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CommentListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommentListComponent
  ]
})
export class CommentModule { }
