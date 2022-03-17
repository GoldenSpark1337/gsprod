import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquareButtonComponent } from './square-button.component';



@NgModule({
  declarations: [SquareButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SquareButtonComponent
  ]
})
export class SquareButtonModule { }
