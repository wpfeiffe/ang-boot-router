import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-play',
  templateUrl: './form-play.component.html',
  styleUrls: ['./form-play.component.css']
})
export class FormPlayComponent implements OnInit {

  title:string = "Form Play";
  message:string = "";

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    console.log('You submitted value:', form)
    this.message = "First: " + form.firstName + ", Last: " + form.lastName;
  }

  closeAlert(): void {
    this.message = "";
    console.log("Dismissing alert...")
  }

}