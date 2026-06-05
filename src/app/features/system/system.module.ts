import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { SystemSettingsComponent } from './components/system-settings/system-settings.component';
import { SystemLogsComponent } from './components/system-logs/system-logs.component';

const routes: Routes = [
  { path: 'settings', component: SystemSettingsComponent },
  { path: 'logs', component: SystemLogsComponent },
  { path: '', redirectTo: 'settings', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    SystemSettingsComponent,
    SystemLogsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class SystemModule { }

