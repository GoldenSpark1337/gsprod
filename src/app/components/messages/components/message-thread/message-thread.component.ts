import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, PartialObserver } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IMessage } from 'src/app/shared/models/message';
import { IUser } from 'src/app/shared/models/user';
import { AccountService } from 'src/app/shared/services/account.service';
import { MessageService } from 'src/app/shared/services/message.service';
import { ThreadMessageUsernameService } from '../../services/thread-message-username.service';

@Component({
  selector: 'gs-message-thread',
  templateUrl: './message-thread.component.html',
  styleUrls: ['./message-thread.component.css']
})
export class MessageThreadComponent implements OnInit {
  @ViewChild("messageForm") messageForm: NgForm;
  messages: IMessage[];
  messageContent: string;
  currentUser$: Observable<IUser> = this.currentUsername.currentUser$;
  username$: Observable<string> = this.threadUsername.getUsername();
  messages$: Observable<IMessage[]> = this.username$.pipe(
    switchMap(user => this.messageService.getMessageThread(user))
  );

  constructor(
    private messageService: MessageService, 
    private threadUsername: ThreadMessageUsernameService,
    private currentUsername: AccountService) { }
  
  async ngOnInit() {
  }

  public sendMessage() {
    this.username$.pipe(
      switchMap(m => this.messageService.sendMessage(m, this.messageContent))
    ).subscribe(res => {
      this.messageForm.reset();
    });
  }

  public deleteMessage(id: number) {
    this.messageService.deleteMessage(id).subscribe(() => {
      this.messages.splice(this.messages.findIndex(m => m.id === id), 1);
    });
  }
}
