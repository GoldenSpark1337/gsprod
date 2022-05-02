import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSearchComponent } from './main-search.component';
import { SearchHeaderComponent } from './components/container-grid/search-header/search-header.component';
import { MaterialModule } from 'src/app/core/material.module';
import { MatIconModule } from '@angular/material/icon';
import { SquareButtonModule } from 'src/app/shared/modules/square-button/square-button.module';
import { RouterModule } from '@angular/router';
import { BuyCardFigureTemplateModule } from 'src/app/shared/modules/btn-buy-from-track/components/buy-card-figure-template/buy-card-figure-template.module';
import { SwiperListMembersComponent } from './components/members/swiper-list-members/swiper-list-members.component';
import { CardFigureMemeberComponent } from './components/members/components/card-figure-memeber/card-figure-memeber.component';
import { CardFigureTemplateCarouselComponent } from './components/members/components/card-figure-template-carousel/card-figure-template-carousel.component';
import { CardFigcaptionTemplateCarouselComponent } from './components/members/components/card-figcaption-template-carousel/card-figcaption-template-carousel.component';
import { CaptionFigureTemplateModule } from 'src/app/shared/modules/caption-figure-template/caption-figure-template.module';
import { SwiperListTracksModule } from './components/swiper-list-tracks/swiper-list-tracks.module';
import { SwiperListTemplateModule } from './components/swiper-list-template/swiper-list-template.module';
import { SwiperListTitleModule } from './components/swiper-list-template/components/swiper-list-title/swiper-list-title.module';
import { SwiperControllersModule } from './components/swiper-list-template/components/swiper-list-title/components/swiper-controllers/swiper-controllers.module';
import { AppSwiperModule } from './components/swiper-list-template/components/swiper/swiper.module';
import { CardFigureTrackModule } from './components/swiper-list-template/components/swiper/components/card-figure-track/card-figure-track.module';
import { SwiperListSoundKitsModule } from './components/kits/swiper-list-sound-kits/swiper-list-sound-kits.module';
import { SwiperListVstsModule } from './components/vsts/swiper-list-vsts/swiper-list-vsts.module';
import { SearchFiltersModule } from './components/container-grid/search-filters/search-filters.module';
import { ContainerGridModule } from './components/container-grid/container-grid.module';
import { SearchHeaderModule } from './components/container-grid/search-header/search-header.module';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [
    MainSearchComponent,
    SwiperListMembersComponent, CardFigureMemeberComponent, CardFigureTemplateCarouselComponent, CardFigcaptionTemplateCarouselComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatIconModule,
    ContainerGridModule,
    SearchHeaderModule,
    SquareButtonModule,
    RouterModule,
    BuyCardFigureTemplateModule,
    SwiperModule,
    CaptionFigureTemplateModule,
    SwiperListTemplateModule,
    SearchFiltersModule,
    SwiperListTitleModule,
    SwiperListTracksModule,
    SwiperControllersModule,
    AppSwiperModule,
    CardFigureTrackModule,
    SwiperListSoundKitsModule,
    SwiperListVstsModule
  ],
  exports: [
    MainSearchComponent
  ]
})
export class MainSearchModule { }
