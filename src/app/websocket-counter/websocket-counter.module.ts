import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { WebsocketCounterRoutingModule } from './websocket-counter-routing.module';
import { WebsocketCounterComponent } from './websocket-counter.component';
import * as http from "selenium-webdriver/http";

@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    WebsocketCounterRoutingModule
  ],
  declarations: [WebsocketCounterComponent]
})
export class WebsocketCounterModule { }
