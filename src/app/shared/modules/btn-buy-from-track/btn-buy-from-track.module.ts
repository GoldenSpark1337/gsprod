import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnBuyFromTrackComponent } from './btn-buy-from-track.component';
import { SquareButtonModule } from '../square-button/square-button.module';
import { MatIconModule } from '@angular/material/icon';
import { BuyCardFigureTemplateModule } from './components/buy-card-figure-template/buy-card-figure-template.module';
import { BtnBuyFromTemplateModule } from './components/btn-buy-from-template/btn-buy-from-template.module';



@NgModule({
  declarations: [
    BtnBuyFromTrackComponent
  ],
  imports: [
    CommonModule,
    SquareButtonModule,
    MatIconModule,
    BuyCardFigureTemplateModule,
    BtnBuyFromTemplateModule
  ],
  exports: [
    BtnBuyFromTrackComponent
  ]
})
export class BtnBuyFromTrackModule { }
