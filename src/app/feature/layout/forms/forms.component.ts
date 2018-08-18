import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  // template: '<router-outlet></router-outlet>',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if(this.router.url === '/forms') {
      this.router.navigate(['/forms/form']);
    }
  }

}
