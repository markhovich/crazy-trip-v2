import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from 'src/app/shared/_services/comment/comment.service';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/shared/_model/User';
import { AuthService } from 'src/app/shared/_services/auth/auth.service';
import { Article } from 'src/app/shared/_model/Article';
import { Comment } from 'src/app/shared/_model/Comment';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {

  //Variables dev
  cookieValue: string;

  @Input() comments: Comment[];
  @Input() articleId: number;

  currentUser: User;

  comSub: Subscription;
  nbCom: number;

  constructor(private cs: CommentService,
    private authService: AuthService) {
    this.currentUser = this.authService.currentUserValue;
   }

  ngOnInit(): void {
      this.nbCom = this.comments.length;
     
  }

  onDelete(com: Comment){
    if(confirm('Voulez-vous supprimer ce commentaire définitivement ?')){
      this.comSub = this.cs.delete(com.id).subscribe(
        (res) => {
        var index = this.comments.indexOf(com);
        this.comments.splice(index, 1);
      },
      (error) => {
        console.error(error);
      })
    }

  }

  onSubmit(f: NgForm){
    var com = new Comment(0, f.value.comment, new Date(), new Article(this.articleId), new User(this.currentUser.id, this.currentUser.name));
    this.comSub = this.cs.save(com).subscribe(
      data => {
      this.comments.push(com);
      this.nbCom = this.comments.length;
      f.reset();
    }, err => {
      console.error(err);
    })
  }
}
