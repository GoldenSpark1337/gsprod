import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/core/material.module';

import { CartReviewComponent } from './cart-review.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { ComponentContainerComponent } from './components/component-container/component-container.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {
    path: "checkout", component: CartReviewComponent
  }
];

@NgModule({
  declarations: [CartReviewComponent, MainHeaderComponent, ComponentContainerComponent, CartComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: []
})
export class CartReviewModule { }
