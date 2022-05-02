import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageThreadComponent } from './message-thread.component';
import { MenuMoreOptionsDeleteModule } from '../menu-more-options-delete/menu-more-options-delete.module';
import { RoundButtonModule } from 'src/app/shared/modules/round-button/round-button.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TimeagoModule } from 'ngx-timeago';
import { InputMentionComponent } from './components/input-mention/input-mention.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MenuMoreOptionsModule } from 'src/app/shared/modules/menu-more-options/menu-more-options.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MenuMoreOptionsDeleteModule,
    RoundButtonModule,
    MatButtonModule,
    MatIconModule,
    TimeagoModule,
    RouterModule
  ],
  declarations: [
    MessageThreadComponent,
    InputMentionComponent
  ],
  exports: [MessageThreadComponent]
})
export class MessageThreadModule { }
