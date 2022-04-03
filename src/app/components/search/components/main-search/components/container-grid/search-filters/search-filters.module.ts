import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CategoriesRadioGroupComponent } from './components/categories-radio-group/categories-radio-group.component';
import { SearchFiltersComponent } from './search-filters.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [SearchFiltersComponent],
    declarations: [
        SearchFiltersComponent,
        CategoriesRadioGroupComponent
    ],
    providers: [],
})
export class SearchFiltersModule { }
