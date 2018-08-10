import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { GenericClassComponent } from '../generic-class/generic-class.component';

const routes: Routes = [
  { path: '', component: GenericClassComponent },
  { path: '**', component: GenericClassComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GenericClassComponent]
})
export class GenericClassModule { }
