import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './search-results.component';
import { ListCardTrackModule } from '../list-card-track/list-card-track.module';

@NgModule({
  imports: [
    CommonModule,
    ListCardTrackModule
  ],
  declarations: [SearchResultsComponent],
  exports: [SearchResultsComponent]
})
export class SearchResultsModule { }
