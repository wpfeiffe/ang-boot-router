import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WebsocketCounterComponent} from "./websocket-counter.component";

const routes: Routes = [
  {
    path: '',
    component: WebsocketCounterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class WebsocketCounterRoutingModule { }
