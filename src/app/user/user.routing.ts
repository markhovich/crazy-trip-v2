import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { AdminGuard } from '../shared/_helpers/admin.guard';

export const routes: Routes = [
    { path: 'register', component: RegisterComponent},
    { path: 'admin', component: UserListComponent, canActivate: [AdminGuard]},
    { path: 'user-edit/:name', component: UserEditComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes)