import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { AdminGuard } from '../shared/_helpers/admin.guard';
import { UserSingleComponent } from './user-single/user-single.component';

export const routes: Routes = [
    { path: 'register', component: RegisterComponent},
    { path: 'user-list', component: UserListComponent, canActivate: [AdminGuard]},
    { path: 'user-edit/:name', component: UserEditComponent, canActivate: [AdminGuard]},
    { path: 'user-single/:name', component: UserSingleComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes)