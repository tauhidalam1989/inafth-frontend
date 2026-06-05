import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { AdvertisingBannerComponent } from './components/advertising-banner/advertising-banner.component';
import { AdvertisementsComponent } from './components/advertisements/advertisements.component';
import { ViewAdvertisementsComponent } from './components/view-advertisements/view-advertisements.component';

const routes: Routes = [
  { path: '', component: AdvertisingBannerComponent },
  { path: 'advertising-banner', component: AdvertisingBannerComponent },
  { path: 'advertisements', component: AdvertisementsComponent },
  { path: 'view-advertisements', component: ViewAdvertisementsComponent }
];

@NgModule({
  declarations: [
    AdvertisingBannerComponent,
    AdvertisementsComponent,
    ViewAdvertisementsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AdvertisementsModule { }
