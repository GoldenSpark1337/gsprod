import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SwiperListTitleModule } from '../../swiper-list-template/components/swiper-list-title/swiper-list-title.module';
import { AppSwiperModule } from '../../swiper-list-template/components/swiper/swiper.module';
import { SwiperListTemplateModule } from '../../swiper-list-template/swiper-list-template.module';
import { CardFigureVstModule } from './components/card-figure-vst/card-figure-vst.module';
import { SwiperListVstsComponent } from './swiper-list-vsts.component';

@NgModule({
    imports: [
        CommonModule,
        SwiperListTemplateModule,
        SwiperListTitleModule,
        AppSwiperModule,
        CardFigureVstModule
    ],
    declarations: [SwiperListVstsComponent],
    exports: [SwiperListVstsComponent],
    providers: [],
})
export class SwiperListVstsModule { }
