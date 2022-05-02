import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogCreateMessageComponent } from './dialog-create-message.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RoundButtonModule } from 'src/app/shared/modules/round-button/round-button.module';
import { MatIconModule } from '@angular/material/icon';
import { SquareButtonModule } from 'src/app/shared/modules/square-button/square-button.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    RoundButtonModule,
    MatIconModule,
    SquareButtonModule
  ],
  declarations: [DialogCreateMessageComponent],
  exports: [DialogCreateMessageComponent]
})
export class DialogCreateMessageModule { }
