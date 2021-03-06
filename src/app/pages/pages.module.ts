import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { routing } from './pages.routing';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    routing
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    SearchComponent
  ]
})
export class PagesModule { }
