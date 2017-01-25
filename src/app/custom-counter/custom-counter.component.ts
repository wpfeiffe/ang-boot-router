import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.css']
})
export class CustomCounterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  counterValue:number = 0;

  @Input()
  get counter():number{
    return this.counterValue;
  }

  @Output() counterChange = new EventEmitter();
  set counter(counterValue:number){
    this.counterValue = counterValue;
    this.counterChange.emit(this.counterValue);
  }

  increment(){
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

}
