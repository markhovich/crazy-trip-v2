import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/shared/_model/Article';
import { Subscription } from 'rxjs';
import { User } from 'src/app/shared/_model/User';
import { ArticleService } from 'src/app/shared/_services/article/article.service';
import { AuthService } from 'src/app/shared/_services/auth/auth.service';
import { FileService } from 'src/app/shared/_services/file/file.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentUser: User;

  articles: Article[];
  images: any[] = [];
  artSub: Subscription;

  constructor(private as: ArticleService,
    private authService: AuthService,
    private fs: FileService) {
      this.currentUser = this.authService.currentUserValue;
     }

  ngOnInit(): void {
    this.artSub = this.as.getAll().subscribe( 
      (res: Article[]) => {
        this.articles = res.slice(0,3);

        for(let article of this.articles){
          this.fs.download(article.id).subscribe(
            res => {
              this.createImageFromBlob(res);
            }, err => {
              console.error(err);
            }
          );
        }
    }, err => {
      console.error(err);
    })
  }

  ngOnDestroy() {
    this.artSub.unsubscribe();
  }

  createImageFromBlob(image: Blob){
    
    let reader = new FileReader();

    reader.addEventListener("load", () => {
    this.images.push(reader.result);
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
    //this.images.push(this.domSanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + reader.result));
}
}
