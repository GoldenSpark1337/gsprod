import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/core/material.module';

import { CartReviewComponent } from './cart-review.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { ComponentContainerComponent } from './components/component-container/component-container.component';
import { CartComponent } from './components/cart/cart.component';
import { CartGroupComponent } from './components/cart/components/cart-group/cart-group.component';

const routes: Routes = [
  {
    path: '', component: CartReviewComponent
  }
];

@NgModule({
  declarations: [CartReviewComponent, MainHeaderComponent, ComponentContainerComponent, CartComponent, CartGroupComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: []
})
export class CartReviewModule { }
