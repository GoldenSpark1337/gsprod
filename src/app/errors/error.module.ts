import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'not-found',
    component: NotFoundComponent
  }
]

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class ErrorModule { }
