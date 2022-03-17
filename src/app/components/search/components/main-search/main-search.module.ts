import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSearchComponent } from './main-search.component';
import { ContainerGridComponent } from './components/container-grid/container-grid.component';
import { SwiperListTracksComponent } from './components/swiper-list-tracks/swiper-list-tracks.component';
import { SwiperListTemplateComponent } from './components/swiper-list-template/swiper-list-template.component';
import { SwiperListTitleComponent } from './components/swiper-list-template/components/swiper-list-title/swiper-list-title.component';
import { SwiperComponent } from './components/swiper-list-template/components/swiper/swiper.component';
import { SwiperControllersComponent } from './components/swiper-list-template/components/swiper-list-title/components/swiper-controllers/swiper-controllers.component';
import { SearchHeaderComponent } from './components/container-grid/search-header/search-header.component';
import { SearchFiltersComponent } from './components/container-grid/search-filters/search-filters.component';
import { CategoriesRadioGroupComponent } from './components/container-grid/search-filters/components/categories-radio-group/categories-radio-group.component';
import { MaterialModule } from 'src/app/core/material.module';
import { MatIconModule } from '@angular/material/icon';
import { SwiperModule } from 'swiper/angular';
import { CardFigureTrackComponent } from './components/swiper-list-template/components/swiper/components/card-figure-track/card-figure-track.component';
import { CardFigureTemplateComponent } from './components/swiper-list-template/components/swiper/components/card-figure-template/card-figure-template.component';
import { CardFigcaptionTemplateComponent } from './components/swiper-list-template/components/swiper/components/card-figcaption-template/card-figcaption-template.component';
import { CaptionFigureTemplateComponent } from './components/swiper-list-template/components/swiper/components/card-figcaption-template/components/caption-figure-template/caption-figure-template.component';
import { SponsoredBadgeComponent } from './components/swiper-list-template/components/swiper/components/card-figcaption-template/components/sponsored-badge/sponsored-badge.component';
import { ButtonPlayTrackComponent } from './components/swiper-list-template/components/swiper/components/button-play-track/button-play-track.component'
import { SquareButtonModule } from 'src/app/shared/modules/square-button/square-button.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MainSearchComponent,
    ContainerGridComponent,
    SearchHeaderComponent,
    SearchFiltersComponent,
    CategoriesRadioGroupComponent,
    SwiperListTracksComponent, 
    SwiperListTemplateComponent, 
    SwiperListTitleComponent, 
    SwiperComponent, 
    SwiperControllersComponent, 
    CardFigureTrackComponent, 
    CardFigureTemplateComponent, 
    CardFigcaptionTemplateComponent, 
    CaptionFigureTemplateComponent, 
    SponsoredBadgeComponent, 
    ButtonPlayTrackComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatIconModule,
    SwiperModule,
    SquareButtonModule,
    RouterModule
  ],
  exports: [
    MainSearchComponent
  ]
})
export class MainSearchModule { }
