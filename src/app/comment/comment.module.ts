import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentListComponent } from './comment-list/comment-list.component';
import { FormsModule } from '@angular/forms';
import { CommentAdminComponent } from './comment-admin/comment-admin.component';
import { routing } from './comment.routing';

@NgModule({
  declarations: [
    CommentListComponent,
    CommentAdminComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  exports: [
    CommentListComponent, 
    CommentAdminComponent
  ]
})
export class CommentModule { }
