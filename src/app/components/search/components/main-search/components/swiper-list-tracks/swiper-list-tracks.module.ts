import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';
import { SwiperListTitleModule } from '../swiper-list-template/components/swiper-list-title/swiper-list-title.module';
import { CardFigureTrackModule } from '../swiper-list-template/components/swiper/components/card-figure-track/card-figure-track.module';
import { AppSwiperModule } from '../swiper-list-template/components/swiper/swiper.module';
import { SwiperListTemplateModule } from '../swiper-list-template/swiper-list-template.module';
import { SwiperListTracksComponent } from './swiper-list-tracks.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SwiperListTemplateModule,
        SwiperListTitleModule,
        AppSwiperModule,
        SwiperModule,
        CardFigureTrackModule
    ],
    exports: [SwiperListTracksComponent],
    declarations: [SwiperListTracksComponent],
    providers: [],
})
export class SwiperListTracksModule { }
