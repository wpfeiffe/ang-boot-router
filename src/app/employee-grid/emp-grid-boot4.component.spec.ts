/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EmpGridBoot4Component } from './emp-grid-boot4.component';

describe('EmpGridBoot4Component', () => {
  let component: EmpGridBoot4Component;
  let fixture: ComponentFixture<EmpGridBoot4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpGridBoot4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpGridBoot4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
