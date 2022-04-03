import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerGridUserDetailComponent } from './container-grid-user-detail.component';
import { ProfileInfoModule } from './components/profile-info/profile-info.module';
import { ProfileHeaderModule } from './components/profile-header/profile-header.module';
import { SwiperListTracksModule } from 'src/app/components/search/components/main-search/components/swiper-list-tracks/swiper-list-tracks.module';
import { EmptyContentContainerModule } from './components/empty-content-container/empty-content-container.module';

@NgModule({
  imports: [
    CommonModule,
    ProfileHeaderModule,
    ProfileInfoModule,
    SwiperListTracksModule,
    EmptyContentContainerModule
  ],
  declarations: [ContainerGridUserDetailComponent],
  exports: [ContainerGridUserDetailComponent]
})
export class ContainerGridUserDetailModule { }
