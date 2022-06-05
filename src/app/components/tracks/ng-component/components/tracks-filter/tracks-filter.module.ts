import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TracksFilterComponent } from './tracks-filter.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule
  ],
  declarations: [TracksFilterComponent],
  exports: [TracksFilterComponent]
})
export class TracksFilterModule { }
