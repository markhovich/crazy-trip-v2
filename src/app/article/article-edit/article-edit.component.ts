import { Component, OnInit, OnDestroy } from '@angular/core';
import { ArticleService } from 'src/app/shared/_services/article/article.service';
import { Article } from 'src/app/shared/_model/Article';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FileService } from 'src/app/shared/_services/file/file.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss']
})
export class ArticleEditComponent implements OnInit, OnDestroy {

  article: Article = {};
  artSub: Subscription;
  id: number;

  image;
  selectedFile: File;

  constructor(
    private as: ArticleService,
    private route: ActivatedRoute,
    private router: Router,
    private fs: FileService,
    private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.artSub = this.route.params.subscribe(params => {
      this.id = params['id'];
      if(this.id){
        this.as.get(this.id).subscribe(res => {
          if(res){
            this.article = res;
            console.log(res)
            this.fs.download(this.article.id).subscribe(res => {
              console.log(res);
              this.createImageFromBlob(res);
            }, err => {
              console.error(err);
            })
          } else {
            console.log('Article introuvable, retour à la liste');
            this.gotoList();
          }
        });
      }
    })
  }

  ngOnDestroy() {
    this.artSub.unsubscribe();
  }
  
  createImageFromBlob(image: Blob){
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.image = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
    
    this.image = this.domSanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + reader.result);
    }

  onFileSelected(event){
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile)
  }

  onSubmit(f: NgForm){

    this.as.save(f.value, this.id).subscribe((res: Article) => {
      console.log(res)
      if(this.selectedFile){
        this.fs.upload(this.selectedFile, res.id).subscribe(
          res => {
            console.log(res);
            this.gotoList();
          }, err => {
            console.error(err);
          }
        );
      }

    }, (error) => {
      console.error(error);
    });
  }

  onDelete(id: number){
    if(confirm('Voulez-vous supprimer définitivement cet article ?')){
      this.as.delete(id).subscribe(() => {
        this.gotoList();
      }, (error) => {
        console.error(error);
      });
      alert('L\'article part en fumée')
    }
  }

  gotoList(){
    this.router.navigate(['articles']);
  }
}
