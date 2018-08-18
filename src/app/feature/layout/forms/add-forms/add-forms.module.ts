import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AddFormsComponent } from '../add-forms/add-forms.component';

const routes: Routes = [
  {path: '', component: AddFormsComponent},
  {path: '**', component: AddFormsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [AddFormsComponent]
})
export class AddFormsModule { }
