import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDownloadComponent } from './button-download.component';
import { MatButtonModule } from '@angular/material/button';
import { RoundButtonModule } from '../round-button/round-button.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    RoundButtonModule
  ],
  declarations: [ButtonDownloadComponent],
  exports: [ButtonDownloadComponent]
})
export class ButtonDownloadModule { }
