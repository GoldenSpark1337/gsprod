import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardFigureTemplateModule } from '../../../../swiper-list-template/components/swiper/components/card-figure-template/card-figure-template.module';
import { CardFigureVstComponent } from './card-figure-vst.component';

@NgModule({
    imports: [
        CommonModule,
        CardFigureTemplateModule
    ],
    declarations: [CardFigureVstComponent],
    exports: [CardFigureVstComponent],
    providers: [],
})
export class CardFigureVstModule { }
