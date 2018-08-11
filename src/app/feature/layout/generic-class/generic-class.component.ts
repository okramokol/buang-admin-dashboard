import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-generic-class',
  templateUrl: './generic-class.component.html',
  styleUrls: ['./generic-class.component.css']
})
export class GenericClassComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  dynamicNumber = Math.random();
  ngOnInit() {
    this.route.params.subscribe(params => {
      alert(params['id']);
    });
  }

}
