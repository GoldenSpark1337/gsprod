import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/core/material.module';
import { ComponentComponent } from './component.component';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './components/loader/loader.component';
import { SearchComponent } from './components/search/search.component';
import { MainSearchModule } from './components/main-search/main-search.module';

const routes = [
  {
    path: '', component: ComponentComponent
  }
]

@NgModule({
  declarations: [ComponentComponent, LoaderComponent, SearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild(routes),
    MainSearchModule
  ]
})
export class ComponentModule { }
