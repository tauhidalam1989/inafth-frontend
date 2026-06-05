import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { UsersPermissionsComponent } from './components/users-permissions/users-permissions.component';

const routes: Routes = [
  { path: '', component: UsersPermissionsComponent },
  { path: 'users-permissions', component: UsersPermissionsComponent }
];

@NgModule({
  declarations: [
    UsersPermissionsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class UsersModule { }
