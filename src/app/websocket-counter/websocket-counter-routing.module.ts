import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WebsocketCounterComponent} from "./websocket-counter.component";
import {WebsocketEchoComponent} from "./websocket-echo.component"

const routes: Routes = [
  {
    path: 'wscounter',
    component: WebsocketCounterComponent
  },
  {
    path: 'wsecho',
    component: WebsocketEchoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class WebsocketCounterRoutingModule { }
