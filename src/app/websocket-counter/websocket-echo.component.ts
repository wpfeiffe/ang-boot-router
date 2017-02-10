import { Component, OnInit } from '@angular/core';
import { $WebSocket, WebSocketSendMode } from './angular2-websocket'
import { Http } from '@angular/http'
import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'app-websocket-echo',
    templateUrl: './websocket-echo.component.html',
    styleUrls: ['./websocket-echo.component.css']
})
export class WebsocketEchoComponent implements OnInit {

    ws: $WebSocket;
    messageOut: string = "Second Test";
    messageIn: string = ""

    constructor(private http: Http) {

    }

    ngOnInit() {

        if (this.ws == null)
        {
            this.ws = new $WebSocket("ws://localhost:8080/wsecho");
        }
        this.sendMessageWithArg("Hello");
        this.ws.getDataStream().subscribe(
            res => {
                this.messageIn = JSON.parse(res.data).value;
            },
            function(e) { console.log('Error: ' + e.message); },
            function() { console.log('Completed'); }
        );
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    sendMessage() {
        this.sendMessageWithArg(this.messageOut)
    }

    sendMessageWithArg(arg: string) {
        this.ws.send(arg)
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
