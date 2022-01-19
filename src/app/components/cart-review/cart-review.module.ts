import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartReviewComponent } from './cart-review.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "checkout", component: CartReviewComponent
  }
];

@NgModule({
  declarations: [CartReviewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: []
})
export class CartReviewModule { }
