import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopInfoContainerComponent } from './top-info-container.component';
import { StatCarouselModule } from './components/stat-carousel/stat-carousel.module';

@NgModule({
  imports: [
    CommonModule,
    StatCarouselModule
  ],
  declarations: [TopInfoContainerComponent],
  exports: [TopInfoContainerComponent]
})
export class TopInfoContainerModule { }
