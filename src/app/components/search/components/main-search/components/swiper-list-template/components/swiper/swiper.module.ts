import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SwiperModule } from 'swiper/angular';
import { AppSwiperComponent } from './swiper.component';


@NgModule({
    imports: [
        CommonModule,
        SwiperModule
    ],
    exports: [AppSwiperComponent],
    declarations: [AppSwiperComponent],
    providers: [],
})
export class AppSwiperModule { }
