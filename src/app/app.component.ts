import { Component, OnInit, OnDestroy, ViewContainerRef } from '@angular/core';
import { STOMPService } from './stomp/services/stomp.service';
import { ConfigService } from './stomp/services/config.service'
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Observable } from 'rxjs/Observable';
import { Message } from 'stompjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [STOMPService]
})
export class AppComponent implements OnInit, OnDestroy  {

  // Stream of messages
  public messages: Observable<Message>;

  // Array of historic message (bodies)
  public mq: Array<string> = [];

  // A count of messages received
  public count = 0;

  constructor(private stompService: STOMPService, private configService: ConfigService,
              public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.configService.getConfig('app/stomp/config/config.json').then(
        config => {
          // ... then pass it to (and connect) STOMP:
          this.stompService.configure(config);
          this.stompService.try_connect().then(this.onConnect);
        }
    );
  }

  ngOnDestroy() {
    this.stompService.disconnect();
  }

  /** Callback on_connect to queue */
  public onConnect = () => {

    // Store local reference to Observable
    // for use with template ( | async )
    this.messages = this.stompService.messages;

    // Subscribe a function to be run on_next message
    this.messages.subscribe(this.onNext);
  }

  /** Consume a message from the _stompService */
  public onNext = (message: Message) => {

    // Store message in "historic messages" queue
    this.mq.push(message.body + '\n');

    // Count it
    this.count++;

    // Log it to the console
    //console.log(this.messages);
    this.toastr.success(message.body);

  }

}
