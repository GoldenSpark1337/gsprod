import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouritesComponent } from './favourites.component';
import { RouterModule, Routes } from '@angular/router';
import { MainHeaderModule } from 'src/app/shared/modules/main-header/main-header.module';
import { TrackListModule } from 'src/app/shared/modules/track-list/track-list.module';

const routes: Routes = [
  {path: '', component: FavouritesComponent}
]


@NgModule({
  imports: [
    CommonModule,
    MainHeaderModule,
    TrackListModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FavouritesComponent],
  exports: [FavouritesComponent]
})
export class FavouritesModule { }
