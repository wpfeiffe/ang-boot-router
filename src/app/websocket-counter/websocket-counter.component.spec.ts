/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WebsocketCounterComponent } from './websocket-counter.component';

describe('WebsocketCounterComponent', () => {
  let component: WebsocketCounterComponent;
  let fixture: ComponentFixture<WebsocketCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsocketCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsocketCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
