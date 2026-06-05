import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { ScreenManagementComponent } from './components/screen-management/screen-management.component';
import { ScreenDiscoveryComponent } from './components/screen-discovery/screen-discovery.component';
import { ScreenDashboardComponent } from './components/screen-dashboard/screen-dashboard.component';
import { ScreenCreateComponent } from './components/screen-create/screen-create.component';
import { ScreenListComponent } from './components/screen-list/screen-list.component';
import { ScreenGroupingComponent } from './components/screen-grouping/screen-grouping.component';
import { ScreenMonitorComponent } from './components/screen-monitor/screen-monitor.component';
import { ScreenPlaybackComponent } from './components/screen-playback/screen-playback.component';
import { GroupLayoutComponent } from './components/group-layout/group-layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: ScreenDashboardComponent },
  { path: 'discover', component: ScreenDiscoveryComponent },
  { path: 'create', component: ScreenCreateComponent },
  { path: 'list', component: ScreenListComponent },
  { path: 'grouping', component: ScreenGroupingComponent },
  { path: 'monitor', component: ScreenMonitorComponent },
  { path: 'playback', component: ScreenPlaybackComponent }
];

@NgModule({
  declarations: [
    ScreenManagementComponent,
    ScreenDiscoveryComponent,
    ScreenDashboardComponent,
    ScreenCreateComponent,
    ScreenListComponent,
    ScreenGroupingComponent,
    ScreenMonitorComponent,
    ScreenPlaybackComponent,
    GroupLayoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ScreensModule { }

