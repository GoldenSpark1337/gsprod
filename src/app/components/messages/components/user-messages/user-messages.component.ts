import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMessage } from 'src/app/shared/models/message';
import { IUser } from 'src/app/shared/models/user';
import { AccountService } from 'src/app/shared/services/account.service';
import { MessageService } from 'src/app/shared/services/message.service';
import { ThreadMessageUsernameService } from '../../services/thread-message-username.service';

@Component({
  selector: 'gs-user-messages',
  templateUrl: './user-messages.component.html',
  styleUrls: ['./user-messages.component.css']
})
export class UserMessagesComponent implements OnInit {
  pageIndex = 1;
  pageSize = 10;
  container = "All";
  groupedMessages: any = {};
  messages$: Observable<IMessage[]> = this.messageService.getMessages(this.pageIndex, this.pageSize, this.container);
  currentUsername: string;

  constructor(
    private messageService: MessageService, 
    private threadUsername: ThreadMessageUsernameService,
    private currentUser: AccountService) {
      currentUser.currentUser$.subscribe(user => this.currentUsername = user.username);
    }

  ngOnInit() {
    this.groupMessages();
    console.log(this.groupedMessages);
  }

  pageChanged(event: any) {
    this.pageIndex = event.page;
  }

  loadUsername(username: string) {
    console.log(username)
    this.threadUsername.loadUsername(username);
  }

  groupMessages() {
    this.messages$.subscribe(messages => {
      const reversedMessages = messages.reverse();
      messages.forEach((message) => {
        console.log(message)
          if (!this.groupedMessages[message.senderUsername] && (message.senderUsername !== this.currentUsername)) {
            this.groupedMessages[message.senderUsername] = [];
            this.groupedMessages[message.senderUsername] = message;
            console.log(message.senderUsername)
          }
          if (!this.groupedMessages[message.recipientUsername] && (message.recipientUsername !== this.currentUsername)) {
            this.groupedMessages[message.recipientUsername] = [];
            this.groupedMessages[message.recipientUsername] = message;
          }
        });
    });
  }
}
