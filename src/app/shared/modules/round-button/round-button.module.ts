import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoundButtonComponent } from './round-button.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [RoundButtonComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [RoundButtonComponent]
})
export class RoundButtonModule { }
