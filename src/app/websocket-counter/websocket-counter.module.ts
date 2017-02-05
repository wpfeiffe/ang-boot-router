import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WebsocketCounterRoutingModule } from './websocket-counter-routing.module';
import { WebsocketCounterComponent } from './websocket-counter.component';
import { WebsocketEchoComponent } from './websocket-echo.component'
import * as http from "selenium-webdriver/http";

@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    WebsocketCounterRoutingModule,
    FormsModule
  ],
  declarations: [WebsocketCounterComponent, WebsocketEchoComponent]
})
export class WebsocketCounterModule { }
