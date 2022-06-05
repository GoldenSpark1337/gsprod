import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackListComponent } from './track-list.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { BtnBuyFromTrackModule } from '../btn-buy-from-track/btn-buy-from-track.module';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    BtnBuyFromTrackModule,
    NgxSpinnerModule,
    RouterModule
  ],
  declarations: [TrackListComponent],
  exports: [TrackListComponent]
})
export class TrackListModule { }
