import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ContainerGridComponent } from './container-grid.component';
import { SearchFiltersModule } from './search-filters/search-filters.module';

@NgModule({
    imports: [
        CommonModule,
        SearchFiltersModule,
        NgxSpinnerModule
    ],
    exports: [ContainerGridComponent],
    declarations: [ContainerGridComponent],
    providers: [],
})
export class ContainerGridModule { }
