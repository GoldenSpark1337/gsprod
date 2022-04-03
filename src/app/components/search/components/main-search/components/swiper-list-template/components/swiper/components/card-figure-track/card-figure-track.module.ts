import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardFigureTemplateModule } from '../card-figure-template/card-figure-template.module';
import { CardFigureTrackComponent } from './card-figure-track.component';


@NgModule({
    imports: [
        CommonModule,
        CardFigureTemplateModule
    ],
    exports: [CardFigureTrackComponent],
    declarations: [CardFigureTrackComponent],
    providers: [],
})
export class CardFigureTrackModule { }
