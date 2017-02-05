import { Component, OnInit } from '@angular/core';
import { $WebSocket, WebSocketSendMode } from 'angular2-websocket/angular2-websocket'
import { Http } from '@angular/http'
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-websocket-counter',
  templateUrl: './websocket-counter.component.html',
  styleUrls: ['./websocket-counter.component.css']
})
export class WebsocketCounterComponent implements OnInit {

  counter: string = 'not known';
  status: string = "";
  baseRestUrl: string  = "http://localhost:8080/counterctl/";
  ws: $WebSocket;
  wssend: $WebSocket;

  constructor(private http: Http) {
    this.ws = new $WebSocket("ws://localhost:8080/counter");
  }

  ngOnInit() {
  }

  subscribe($event) {
    console.log("trying to subscribe to ws");
    this.ws = new $WebSocket("ws://localhost:8080/counter");
    this.ws.send("Hello");
    this.ws.getDataStream().subscribe(
        res => {
          var count = JSON.parse(res.data).value;
          console.log('Got: ' + count);
          this.counter = count;
        },
        function(e) { console.log('Error: ' + e.message); },
        function() { console.log('Completed'); }
    );
  }

  enableCounter() {
    var url: string = this.baseRestUrl + "enable";
    this.http.get(url).toPromise()
        .then(res => this.status = res.toString())
        .catch(this.handleError);
  }

  disableCounter() {
    var url: string = this.baseRestUrl + "disable";
    this.http.get(url).toPromise()
        .then(res => this.status = res.toString())
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  sendMessage() {

    // this.wssend = new $WebSocket("ws://localhost:8080/counter");
    // this.wssend.send("Message from Angular2")
    // this.wssend.send("CLOSE")
    this.ws.send("Message from Angular2")
        .subscribe(
        (msg)=> {
          console.log("next", msg.data);
        },
        (msg)=> {
          console.log("error", msg);
        },
        ()=> {
          console.log("complete");
        }
    );
  }


}
