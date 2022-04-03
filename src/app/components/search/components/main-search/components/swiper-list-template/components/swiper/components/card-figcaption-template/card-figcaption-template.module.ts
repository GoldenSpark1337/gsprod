import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BuyCardFigureTemplateModule } from 'src/app/shared/modules/btn-buy-from-track/components/buy-card-figure-template/buy-card-figure-template.module';
import { CaptionFigureTemplateModule } from 'src/app/shared/modules/caption-figure-template/caption-figure-template.module';
import { CardFigcaptionTemplateComponent } from './card-figcaption-template.component';


@NgModule({
    imports: [
        CommonModule,
        CaptionFigureTemplateModule,
        RouterModule,
        BuyCardFigureTemplateModule
    ],
    exports: [CardFigcaptionTemplateComponent],
    declarations: [CardFigcaptionTemplateComponent],
    providers: [],
})
export class CardFigcaptionTemplateModule { }
