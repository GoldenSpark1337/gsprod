import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContainerGridComponent } from './container-grid.component';
import { SearchFiltersModule } from './search-filters/search-filters.module';

@NgModule({
    imports: [
        CommonModule,
        SearchFiltersModule
    ],
    exports: [ContainerGridComponent],
    declarations: [ContainerGridComponent],
    providers: [],
})
export class ContainerGridModule { }
