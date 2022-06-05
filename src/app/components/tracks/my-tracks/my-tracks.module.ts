import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTracksComponent } from './my-tracks.component';
import { TracksFilterModule } from '../ng-component/components/tracks-filter/tracks-filter.module';
import { MyTrackListModule } from '../ng-component/components/my-track-list/my-track-list.module';

@NgModule({
  imports: [
    CommonModule,
    TracksFilterModule,
    MyTrackListModule,
  ],
  declarations: [MyTracksComponent]
})
export class MyTracksModule { }
