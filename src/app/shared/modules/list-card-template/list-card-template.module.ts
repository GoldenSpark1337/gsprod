import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCardTemplateComponent } from './list-card-template.component';
import { CardFigureTrackModule } from 'src/app/components/search/components/main-search/components/swiper-list-template/components/swiper/components/card-figure-track/card-figure-track.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TrackListModule } from '../track-list/track-list.module';

@NgModule({
  imports: [
    CommonModule,
    CardFigureTrackModule,
    TrackListModule,
    NgxSpinnerModule
  ],
  declarations: [ListCardTemplateComponent],
  exports: [ListCardTemplateComponent]
})
export class ListCardTemplateModule { }
