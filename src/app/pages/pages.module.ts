import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { routing } from './pages.routing';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    routing
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    NotFoundComponent
  ]
})
export class PagesModule { }
