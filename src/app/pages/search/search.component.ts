import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/shared/_services/search/search.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchQuery;
  searchResult;
  searchSub: Subscription;

  constructor(private ss: SearchService,
      private route: ActivatedRoute,
      private router: Router) { }

  ngOnInit(): void {
    this.searchSub = this.route.params.subscribe(params => {
      this.searchQuery = params;
      console.log(this.searchQuery)
      if(this.searchQuery){
        this.ss.getSearch(this.searchQuery.search).subscribe( res => {
          console.log(res)
          if(res){
            this.searchResult = res;
          } else {
            this.gotoList()
          }
        })
      }
    })
  }

  ngOnDestroy() {
    this.searchSub.unsubscribe();
  }

  gotoList(){
    this.router.navigate(['home']);
  }
}
