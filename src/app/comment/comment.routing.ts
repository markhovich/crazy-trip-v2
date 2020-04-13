import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from '@angular/core';
import { AdminGuard } from '../shared/_helpers/admin.guard';
import { CommentAdminComponent } from './comment-admin/comment-admin.component';

export const routes: Routes = [
    { path: 'comment-list', component: CommentAdminComponent, canActivate: [AdminGuard]}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes)