import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IUser } from 'src/app/shared/models/user';
import { MessageService } from 'src/app/shared/services/message.service';

@Component({
  selector: 'gs-dialog-create-message',
  templateUrl: './dialog-create-message.component.html',
  styleUrls: ['./dialog-create-message.component.css']
})
export class DialogCreateMessageComponent implements OnInit {
  user: IUser;
  messageContent: string;
  constructor(
  @Inject(MAT_DIALOG_DATA) public data: any,
  private messageService: MessageService) {
    this.user = data.user;
  }

  ngOnInit() {
  }

  sendMessage() {
    this.messageService.sendMessage(this.user.username, this.messageContent).subscribe(message => {

    });
  }
}
