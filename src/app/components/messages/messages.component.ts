import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMessage } from 'src/app/shared/models/message';
import { MessageService } from 'src/app/shared/services/message.service';
import { ThreadMessageUsernameService } from './services/thread-message-username.service';

@Component({
  selector: 'gs-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages$: Observable<IMessage[]>;
  threadUser$: Observable<string> = this.threadUsername.getUsername();

  constructor(private messageService: MessageService, private threadUsername: ThreadMessageUsernameService) { }
  ngOnInit() {
  }
}
