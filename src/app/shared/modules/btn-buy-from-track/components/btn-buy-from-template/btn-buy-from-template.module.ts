import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SquareButtonModule } from '../../../square-button/square-button.module';
import { BuyCardFigureTemplateModule } from '../buy-card-figure-template/buy-card-figure-template.module';
import { BtnBuyFromTemplateComponent } from './btn-buy-from-template.component';


@NgModule({
    imports: [
        CommonModule,
        SquareButtonModule,
        BuyCardFigureTemplateModule,
        MatIconModule
    ],
    declarations: [BtnBuyFromTemplateComponent],
    providers: [],
    exports: [BtnBuyFromTemplateComponent],
})
export class BtnBuyFromTemplateModule { }
