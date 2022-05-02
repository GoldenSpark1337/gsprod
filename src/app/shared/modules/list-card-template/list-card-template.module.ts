import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCardTemplateComponent } from './list-card-template.component';
import { CardFigureTrackModule } from 'src/app/components/search/components/main-search/components/swiper-list-template/components/swiper/components/card-figure-track/card-figure-track.module';

@NgModule({
  imports: [
    CommonModule,
    CardFigureTrackModule
  ],
  declarations: [ListCardTemplateComponent],
  exports: [ListCardTemplateComponent]
})
export class ListCardTemplateModule { }
