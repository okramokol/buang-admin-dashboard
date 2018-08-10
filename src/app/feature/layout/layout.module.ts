import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/**
 * Core Modules
*/
import { LayoutComponent } from '../../feature/layout/layout.component';
import { HeaderComponent } from '../../core/header/header.component';
import { SidebarComponent } from '../../core/sidebar/sidebar.component';

const routes: Routes = [
  { path: '', component: LayoutComponent,
    children: [
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'color', loadChildren: './colors/colors.module#ColorsModule' },
      { path: 'generic-class', loadChildren: './generic-class/generic-class.module#GenericClassModule' },
    ]
  },
  { path: '**', redirectTo: '/' } // Redirect to not found module
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
  ]
})
export class LayoutModule { }
