import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentListComponent } from './comment-list/comment-list.component';
import { FormsModule } from '@angular/forms';
import { CommentAdminComponent } from './comment-admin/comment-admin.component';

@NgModule({
  declarations: [
    CommentListComponent,
    CommentAdminComponent
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
