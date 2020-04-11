import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/articles', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  {
    path: 'articles',
    loadChildren: './article/article.module#ArticleModule',
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes)
