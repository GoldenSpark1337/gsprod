import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';
import { RoundButtonModule } from 'src/app/shared/modules/round-button/round-button.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule, Routes } from '@angular/router';
import { UserMessagesModule } from './components/user-messages/user-messages.module';
import { MessageThreadModule } from './components/message-thread/message-thread.module';

const routes: Routes = [
  {path: '', component: MessagesComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RoundButtonModule,
    MatIconModule,
    MatTooltipModule,
    UserMessagesModule,
    MessageThreadModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MessagesComponent],
  exports: [MessagesComponent]
})
export class MessagesModule { }
