import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonPlayTrackModule } from '../button-play-track/button-play-track.module';
import { CardFigcaptionTemplateModule } from '../card-figcaption-template/card-figcaption-template.module';
import { CardFigureTemplateComponent } from './card-figure-template.component';


@NgModule({
    imports: [
        CommonModule,
        CardFigcaptionTemplateModule,
        ButtonPlayTrackModule,
        RouterModule
    ],
    exports: [CardFigureTemplateComponent],
    declarations: [CardFigureTemplateComponent],
    providers: [],
})
export class CardFigureTemplateModule { }
