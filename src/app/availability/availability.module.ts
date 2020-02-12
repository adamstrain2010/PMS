import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AvailabilityView } from './components/availability/availability.view';
import { AvailabilityGridComponent } from './components/availability-grid/availability-grid.component';
import { SharedModule } from './../shared/shared.module';
import { AvailabilityToolbarComponent } from './components/availability-toolbar/availability-toolbar.component';

@NgModule({
  declarations: [AvailabilityView, AvailabilityGridComponent, AvailabilityToolbarComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ]
})
export class AvailabilityModule { }
