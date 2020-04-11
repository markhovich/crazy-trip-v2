import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from 'src/app/shared/_services/comment/comment.service';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {

  //Variables dev
  cookieValue: string;

  comments: Comment[];
  comSub: Subscription;
  @Input() articleId: number;

  nbCom: number;

  constructor(private cs: CommentService) { }

  ngOnInit(): void {
    this.comSub = this.cs.getByArticle(this.articleId).subscribe( (res: Comment[]) => {
      this.comments = res;
      this.nbCom = res.length;
    })
  }

  onDelete(id: number){
    this.comSub = this.cs.delete(id).subscribe(() => {
    })
  }

  onSubmit(f: NgForm){
    this.comSub = this.cs.save(f.value.comment, this.articleId).subscribe(() => {
    })
  }
}
