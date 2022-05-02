import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonCreateMessageComponent } from './button-create-message.component';
import { SquareButtonModule } from 'src/app/shared/modules/square-button/square-button.module';
import { MatIconModule } from '@angular/material/icon';
import { DialogCreateMessageModule } from '../dialog-create-message/dialog-create-message.module';

@NgModule({
  imports: [
    CommonModule,
    SquareButtonModule,
    MatIconModule,
    DialogCreateMessageModule
  ],
  declarations: [ButtonCreateMessageComponent],
  exports: [ButtonCreateMessageComponent]
})
export class ButtonCreateMessageModule { }
