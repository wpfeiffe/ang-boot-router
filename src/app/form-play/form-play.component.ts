import {Component, OnInit, Input, Output, EventEmitter, ViewContainerRef} from '@angular/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-form-play',
  templateUrl: './form-play.component.html',
  styleUrls: [
    './form-play.component.css'
  ]
})
export class FormPlayComponent implements OnInit {

  title:string = "Form Play";
  message:string = "";
  counterValue:number = 5;

  constructor(public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    console.log('You submitted value:', form)
    this.message = "First: " + form.firstName + ", Last: " + form.lastName;
    this.toastr.success(`Form Data: First: ${form.firstName}, Last: ${form.lastName}`);
  }

  closeAlert(): void {
    this.message = "";
    console.log("Dismissing alert...")
  }

}
