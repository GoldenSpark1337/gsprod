import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyDraftsComponent } from './my-drafts.component';
import { MyTrackListModule } from '../ng-component/components/my-track-list/my-track-list.module';
import { TracksFilterModule } from '../ng-component/components/tracks-filter/tracks-filter.module';
import { ButtonAddToTracklistModule } from 'src/app/shared/modules/button-add-to-tracklist/button-add-to-tracklist.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    TracksFilterModule,
    MyTrackListModule,
    ButtonAddToTracklistModule,
    MatButtonModule
  ],
  declarations: [MyDraftsComponent]
})
export class MyDraftsModule { }
