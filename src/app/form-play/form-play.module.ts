import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPlayRoutingModule } from './form-play-routing.module';
import { FormPlayComponent } from './form-play.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    FormPlayRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [FormPlayComponent]
})
export class FormPlayModule { }
