import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonAddToTracklistComponent } from './button-add-to-tracklist.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { RoundButtonModule } from '../round-button/round-button.module';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatTooltipModule,
    RoundButtonModule
  ],
  declarations: [ButtonAddToTracklistComponent],
  exports: [ButtonAddToTracklistComponent]
})
export class ButtonAddToTracklistModule { }
