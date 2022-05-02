import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatCarouselComponent } from './stat-carousel.component';
import { MatButtonModule } from '@angular/material/button';
import { StatCardModule } from '../stat-card/stat-card.module';
import { Virtual } from 'swiper';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    SwiperModule,
    MatButtonModule,
    StatCardModule
  ],
  declarations: [StatCarouselComponent],
  exports: [StatCarouselComponent]
})
export class StatCarouselModule { }
