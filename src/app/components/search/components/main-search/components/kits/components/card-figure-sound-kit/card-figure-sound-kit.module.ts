import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardFigureTemplateModule } from '../../../swiper-list-template/components/swiper/components/card-figure-template/card-figure-template.module';
import { CardFigureSoundKitComponent } from './card-figure-sound-kit.component';


@NgModule({
    imports: [
        CommonModule,
        CardFigureTemplateModule
    ],
    exports: [CardFigureSoundKitComponent],
    declarations: [CardFigureSoundKitComponent],
    providers: [],
})
export class CardFigureSoundKitModule { }
