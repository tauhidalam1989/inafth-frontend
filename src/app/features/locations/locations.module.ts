import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { SubLocationsComponent } from './components/sub-locations/sub-locations.component';
import { SectionsComponent } from './components/sections/sections.component';
import { SpecialDivisionsComponent } from './components/special-divisions/special-divisions.component';

const routes: Routes = [
  { path: '', redirectTo: 'locations', pathMatch: 'full' },
  { path: 'locations', component: SubLocationsComponent },
  { path: 'sections', component: SectionsComponent },
  { path: 'special-divisions', component: SpecialDivisionsComponent }
];

@NgModule({
  declarations: [
    SubLocationsComponent,
    SectionsComponent,
    SpecialDivisionsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class LocationsModule { }
