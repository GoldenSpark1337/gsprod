import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './charts.component';
import { ContainerGridModule } from '../../search/components/main-search/components/container-grid/container-grid.module';
import { SearchResultsModule } from './components/search-results/search-results.module';
import { SearchHeaderModule } from '../../search/components/main-search/components/container-grid/search-header/search-header.module';
import { RouterModule, Routes } from '@angular/router';
import { SearchFiltersModule } from '../../search/components/main-search/components/container-grid/search-filters/search-filters.module';
import { NgxSpinnerModule } from 'ngx-spinner';

const routes: Routes = [{
  path: '', component: ChartsComponent
}];

@NgModule({
  imports: [
    CommonModule,
    ContainerGridModule,
    SearchHeaderModule,
    SearchFiltersModule,
    SearchResultsModule,
    NgxSpinnerModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChartsComponent]
})
export class ChartsModule { }
