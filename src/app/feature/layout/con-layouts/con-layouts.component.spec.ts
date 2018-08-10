import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConLayoutsComponent } from './con-layouts.component';

describe('ConLayoutsComponent', () => {
  let component: ConLayoutsComponent;
  let fixture: ComponentFixture<ConLayoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConLayoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
