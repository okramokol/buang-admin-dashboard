import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if(this.router.navigate.name === '') {
      this.router.navigate(['/dashboard']);
      console.log(this.router.navigate);
    }
    
  }

}
