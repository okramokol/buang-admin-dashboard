import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: '**', component: DashboardComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChartsModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
