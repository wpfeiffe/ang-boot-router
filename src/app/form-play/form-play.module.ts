import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPlayRoutingModule } from './form-play-routing.module';
import { FormPlayComponent } from './form-play.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CustomCounterComponent } from '../custom-counter/custom-counter.component';
import { ToastModule } from 'ng2-toastr/ng2-toastr';

@NgModule({
  imports: [
    CommonModule,
    FormPlayRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ToastModule.forRoot()
  ],
  declarations: [FormPlayComponent, CustomCounterComponent]
})
export class FormPlayModule { }
