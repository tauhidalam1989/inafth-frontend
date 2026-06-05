import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { NotificationSettingsComponent } from './components/notification-settings/notification-settings.component';
import { NotificationDashboardComponent } from './components/notification-dashboard/notification-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: NotificationDashboardComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'notification-settings', component: NotificationSettingsComponent }
];

@NgModule({
  declarations: [
    NotificationsComponent,
    NotificationSettingsComponent,
    NotificationDashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class NotificationsModule { }
