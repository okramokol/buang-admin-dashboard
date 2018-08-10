import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { ColorsComponent } from '../colors/colors.component';

const routes: Routes = [
  { path: '', component: ColorsComponent },
  { path: '**', component: ColorsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ColorsComponent]
})
export class ColorsModule { }
