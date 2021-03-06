import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/**
 * Core Modules
*/
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from '../../core/header/header.component';
import { SidebarComponent } from '../../core/sidebar/sidebar.component';

const routes: Routes = [
  { path: '', component: LayoutComponent,
    children: [
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'color', loadChildren: './colors/colors.module#ColorsModule' },
      { path: 'generic-class/:id', loadChildren: './generic-class/generic-class.module#GenericClassModule' },
      { path: 'forms', loadChildren: './forms/forms.module#FormsModule' },
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
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class LayoutModule { }
