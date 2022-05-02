import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightMarkComponent } from './highlight-mark.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HighlightMarkComponent],
  exports: [HighlightMarkComponent]
})
export class HighlightMarkModule { }
