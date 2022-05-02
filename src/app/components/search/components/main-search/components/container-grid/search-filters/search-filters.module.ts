import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CategoriesRadioGroupComponent } from './components/categories-radio-group/categories-radio-group.component';
import { SearchFiltersListModule } from './components/search-filters-list/search-filters-list.module';
import { SearchFiltersComponent } from './search-filters.component';

@NgModule({
    imports: [
        CommonModule,
        SearchFiltersListModule
    ],
    declarations: [
        SearchFiltersComponent,
        CategoriesRadioGroupComponent
    ],
    exports: [SearchFiltersComponent],
    providers: [],
})
export class SearchFiltersModule { }
