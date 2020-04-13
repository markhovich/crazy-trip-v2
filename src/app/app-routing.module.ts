import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminGuard } from './shared/_helpers/admin.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/articles', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: '404-not-found', component: NotFoundComponent},
  { path: 'admin', component: DashboardComponent, canActivate: [AdminGuard]},
  { path: '**', redirectTo: '/404-not-found'},
  {
    path: 'articles',
    loadChildren: './article/article.module#ArticleModule',
  },
  { path: 'login',
    loadChildren: './login/login.module#LoginModule'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes)
