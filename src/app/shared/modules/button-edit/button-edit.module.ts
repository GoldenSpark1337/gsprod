import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonEditComponent } from './button-edit.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RoundButtonModule } from '../round-button/round-button.module';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatTooltipModule,
    RoundButtonModule
  ],
  declarations: [ButtonEditComponent],
  exports: [ButtonEditComponent]
})
export class ButtonEditModule { }
