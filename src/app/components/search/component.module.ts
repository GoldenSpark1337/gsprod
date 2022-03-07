import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/core/material.module';
import { ComponentComponent } from './component.component';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './components/loader/loader.component';
import { SearchComponent } from './components/search/search.component';
import { MainSearchComponent } from './components/main-search/main-search.component';
import { ContainerGridComponent } from './components/main-search/components/container-grid/container-grid.component';
import { SearchFiltersComponent } from './components/main-search/components/container-grid/search-filters/search-filters.component';
import { CategoriesRadioGroupComponent } from './components/main-search/components/container-grid/search-filters/components/categories-radio-group/categories-radio-group.component';
import { SearchHeaderComponent } from './components/main-search/components/container-grid/search-header/search-header.component';

const routes = [
  {
    path: '', component: ComponentComponent
  }
]

@NgModule({
  declarations: [ComponentComponent, MainSearchComponent, LoaderComponent, SearchComponent, ContainerGridComponent, SearchFiltersComponent, CategoriesRadioGroupComponent, SearchHeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class ComponentModule { }
