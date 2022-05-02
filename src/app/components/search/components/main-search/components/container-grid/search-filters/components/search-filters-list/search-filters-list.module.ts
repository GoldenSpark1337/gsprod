import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFiltersListComponent } from './search-filters-list.component';
import { HorizontalSeparatorModule } from 'src/app/shared/modules/horizontal-separator/horizontal-separator.module';

@NgModule({
  imports: [
    CommonModule,
    HorizontalSeparatorModule
  ],
  declarations: [SearchFiltersListComponent],
  exports: [SearchFiltersListComponent]
})
export class SearchFiltersListModule { }
