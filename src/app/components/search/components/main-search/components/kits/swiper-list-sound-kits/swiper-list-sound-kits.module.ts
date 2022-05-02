import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SwiperModule } from 'swiper/angular';
import { SwiperListTitleModule } from '../../swiper-list-template/components/swiper-list-title/swiper-list-title.module';
import { AppSwiperModule } from '../../swiper-list-template/components/swiper/swiper.module';
import { SwiperListTemplateModule } from '../../swiper-list-template/swiper-list-template.module';
import { CardFigureSoundKitModule } from '../components/card-figure-sound-kit/card-figure-sound-kit.module';
import { SwiperListSoundKitsComponent } from './swiper-list-sound-kits.component';


@NgModule({
    imports: [
        CommonModule,
        SwiperListTemplateModule,
        SwiperListTitleModule,
        AppSwiperModule,
        SwiperModule,
        CardFigureSoundKitModule
    ],
    declarations: [SwiperListSoundKitsComponent],
    exports: [SwiperListSoundKitsComponent],
    providers: [],
})
export class SwiperListSoundKitsModule { }
