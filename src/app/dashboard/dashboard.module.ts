import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardView } from './components/dashboard/dashboard.view';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [DashboardView],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DashboardModule { }
