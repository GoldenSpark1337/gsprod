import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonPlayItemComponent } from './button-play-item.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [ButtonPlayItemComponent],
  exports: [ButtonPlayItemComponent]
})
export class ButtonPlayItemModule { }
