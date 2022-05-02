import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BtnBuyFromTrackModule } from 'src/app/shared/modules/btn-buy-from-track/btn-buy-from-track.module';
import { TagListModule } from 'src/app/shared/modules/member-content-item-details-template/components/tag-list/tag-list.module';
import { ButtonPlayTrackModule } from '../button-play-track/button-play-track.module';
import { CardFigcaptionTemplateModule } from '../card-figcaption-template/card-figcaption-template.module';
import { CardFigureTemplateComponent } from './card-figure-template.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CardFigcaptionTemplateModule,
        ButtonPlayTrackModule,
        TagListModule,
        BtnBuyFromTrackModule,
        RouterModule,
    ],
    exports: [CardFigureTemplateComponent],
    declarations: [CardFigureTemplateComponent],
    providers: [],
})
export class CardFigureTemplateModule { }
