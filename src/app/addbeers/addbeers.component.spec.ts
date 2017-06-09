/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddbeersComponent } from './addbeers.component';

describe('AddbeersComponent', () => {
  let component: AddbeersComponent;
  let fixture: ComponentFixture<AddbeersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbeersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
