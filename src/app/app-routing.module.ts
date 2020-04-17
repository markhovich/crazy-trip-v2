import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminGuard } from './shared/_helpers/admin.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/articles', pathMatch: 'full'},
  { path: 'admin', component: DashboardComponent, canActivate: [AdminGuard]},
  { path: '**', redirectTo: '/404-not-found'},
  {
    path: 'pages',
    loadChildren: './pages/pages.module#PagesModule',
  },
  {
    path: 'articles',
    loadChildren: './article/article.module#ArticleModule',
  },
  { path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  { path: 'comment',
    loadChildren: './login/login.module#CommentModule'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes)
