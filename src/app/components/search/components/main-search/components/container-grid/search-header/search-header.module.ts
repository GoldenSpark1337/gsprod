import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchHeaderComponent } from './search-header.component';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [SearchHeaderComponent],
    exports: [SearchHeaderComponent],
    providers: [],
})
export class SearchHeaderModule { }
