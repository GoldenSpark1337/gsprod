import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyContentComponent } from './empty-content.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule
  ],
  declarations: [EmptyContentComponent],
  exports: [EmptyContentComponent]
})
export class EmptyContentModule { }
