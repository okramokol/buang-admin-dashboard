import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

// import { LayoutModule } from '../app/feature/layout/layout.module';

const routes: Routes = [
  {
    path: '', loadChildren: './feature/layout/layout.module#LayoutModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
