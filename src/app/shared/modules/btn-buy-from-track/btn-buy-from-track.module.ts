import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnBuyFromTrackComponent } from './btn-buy-from-track.component';
import { BtnBuyFromTemplateComponent } from './components/btn-buy-from-template/btn-buy-from-template.component';
import { BuyCardFigureTemplateComponent } from './components/buy-card-figure-template/buy-card-figure-template.component';
import { SquareButtonModule } from '../square-button/square-button.module';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    BtnBuyFromTrackComponent,
    BtnBuyFromTemplateComponent,
    BuyCardFigureTemplateComponent
  ],
  imports: [
    CommonModule,
    SquareButtonModule,
    MatIconModule
  ],
  exports: [
    BtnBuyFromTrackComponent
  ]
})
export class BtnBuyFromTrackModule { }
