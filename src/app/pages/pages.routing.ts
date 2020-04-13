import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ArticleListComponent } from '../article/article-list/article-list.component';

export const routes: Routes = [
    { path: 'articles', component: ArticleListComponent},
    { path: 'about', component: AboutComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes)