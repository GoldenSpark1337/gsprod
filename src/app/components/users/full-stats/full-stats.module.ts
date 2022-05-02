import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullStatsComponent } from './full-stats.component';
import { ComponentContainerComponent } from './components/component-container/component-container.component';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TopInfoContainerModule } from './components/top-info-container/top-info-container.module';

const routes: Routes = [
  {path:'', component: FullStatsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    NgxChartsModule,
    TopInfoContainerModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FullStatsComponent, ComponentContainerComponent]
})
export class FullStatsModule { }
