import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackEditComponent } from './track-edit.component';
import { MainHeaderModule } from 'src/app/shared/modules/main-header/main-header.module';
import { TrackFormModule } from './components/track-form/track-form.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: TrackEditComponent}
];

@NgModule({
  imports: [
    CommonModule,
    MainHeaderModule,
    TrackFormModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TrackEditComponent],
  exports: [TrackEditComponent]
})
export class TrackEditModule { }
