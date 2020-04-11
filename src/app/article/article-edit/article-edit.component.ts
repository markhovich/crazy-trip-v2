import { Component, OnInit, OnDestroy } from '@angular/core';
import { ArticleService } from 'src/app/shared/_services/article/article.service';
import { Article } from 'src/app/shared/_model/Article';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss']
})
export class ArticleEditComponent implements OnInit, OnDestroy {

  article: Article = {};
  artSub: Subscription;
  id: number;

  selectedFile: File;

  constructor(
    private as: ArticleService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.artSub = this.route.params.subscribe(params => {
      this.id = params['id'];
      if(this.id){
        this.as.get(this.id).subscribe(res => {
          if(res){
            this.article = res;
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

  onFileSelected(event){
    this.selectedFile = event.target.files[0];
  }

  postFile(selectedFile: File){
    //On récupère et upload l'image
    const formData = new FormData()
    formData.append('image', selectedFile)
    return this.http.post('https://crazytripimages.s3.us-east-2.amazonaws.com/articles/', formData)
            .subscribe(
              (response) => {
                console.log(response);
              }
            );
  }

  onSubmit(f: NgForm){

    this.postFile(this.selectedFile);

    this.as.save(f.value, this.id).subscribe(() => {
      this.gotoList();
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
