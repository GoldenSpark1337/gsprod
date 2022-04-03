import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SquareButtonModule } from 'src/app/shared/modules/square-button/square-button.module';
import { SwiperControllersModule } from './components/swiper-controllers/swiper-controllers.module';
import { SwiperListTitleComponent } from './swiper-list-title.component';


@NgModule({
    imports: [
        CommonModule,
        SwiperControllersModule,
        MatIconModule,
        SquareButtonModule
    ],
    exports: [SwiperListTitleComponent],
    declarations: [SwiperListTitleComponent],
    providers: [],
})
export class SwiperListTitleModule { }
