import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from '@angular/core';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { ArticleSingleComponent } from './article-single/article-single.component';
import { AdminGuard } from '../shared/_helpers/admin.guard';

export const routes: Routes = [
    { path: 'articles', component: ArticleListComponent},
    { path: 'articles-edit/:id', component: ArticleEditComponent, canActivate: [AdminGuard]},
    { path: 'articles/:id', component: ArticleSingleComponent},
    { path: 'articles-add', component: ArticleEditComponent, canActivate: [AdminGuard]}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes)