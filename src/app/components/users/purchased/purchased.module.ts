import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchasedComponent } from './purchased.component';
import { MainHeaderModule } from 'src/app/shared/modules/main-header/main-header.module';
import { RouterModule, Routes } from '@angular/router';
import { TrackListModule } from 'src/app/shared/modules/track-list/track-list.module';

const routes: Routes = [
  {path: '', component: PurchasedComponent}
];

@NgModule({
  imports: [
    CommonModule,
    MainHeaderModule,
    TrackListModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PurchasedComponent],
  exports: [PurchasedComponent]
})
export class PurchasedModule { }
