import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FormComponent } from '../form/form.component';

const routes: Routes = [
  {path: '', component: FormComponent},
  {path: '**', component: FormComponent}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [FormComponent]
})
export class FormModule { }
