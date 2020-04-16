import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './user.routing';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserSingleComponent } from './user-single/user-single.component';
import { UserRolePipe } from './_helpers/user-role.pipe';


@NgModule({
  declarations: [RegisterComponent, UserListComponent, UserEditComponent, UserSingleComponent,
  UserRolePipe],
  imports: [
    CommonModule,
    routing,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RegisterComponent, UserListComponent, UserEditComponent, UserSingleComponent,
    UserRolePipe
  ]
})
export class UserModule { }
