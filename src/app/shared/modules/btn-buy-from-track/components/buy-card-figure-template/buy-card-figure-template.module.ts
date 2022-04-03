import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyCardFigureTemplateComponent } from './buy-card-figure-template.component';
import { SquareButtonModule } from '../../../square-button/square-button.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [BuyCardFigureTemplateComponent],
  imports: [
    CommonModule,
    SquareButtonModule,
    MatIconModule
  ],
  exports: [
    BuyCardFigureTemplateComponent
  ]
})
export class BuyCardFigureTemplateModule { }
