import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp2RoutingModule } from './comp2-routing.module';
import { Comp2Component } from './comp2.component';

@NgModule({
  imports: [
    CommonModule,
    Comp2RoutingModule
  ],
  declarations: [Comp2Component]
})
export class Comp2Module { }
