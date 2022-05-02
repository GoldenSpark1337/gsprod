import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatCardComponent } from './stat-card.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule
  ],
  declarations: [StatCardComponent],
  exports: [StatCardComponent]
})
export class StatCardModule { }
