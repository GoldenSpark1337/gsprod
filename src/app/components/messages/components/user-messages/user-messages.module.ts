import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMessagesComponent } from './user-messages.component';
import { MatIconModule } from '@angular/material/icon';
import { TimeagoModule, TimeagoPipe } from 'ngx-timeago';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    TimeagoModule.forChild(),
  ],
  providers: [TimeagoPipe],
  declarations: [UserMessagesComponent],
  exports: [UserMessagesComponent]
})
export class UserMessagesModule { }
