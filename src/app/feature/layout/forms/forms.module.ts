import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FormsComponent } from '../forms/forms.component';

const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
    children: [
      {
        path: 'add-form',
        loadChildren: './add-forms/add-forms.module#AddFormsModule'
      },
      {
        path: 'form',
        loadChildren: './form/form.module#FormModule'
      }
    ]
  },
  { path: '**', component: FormsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [FormsComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class FormsModule { }
