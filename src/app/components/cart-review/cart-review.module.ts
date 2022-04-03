import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/core/material.module';

import { CartReviewComponent } from './cart-review.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { ComponentContainerComponent } from './components/component-container/component-container.component';
import { CartComponent } from './components/cart/cart.component';
import { CartGroupComponent } from './components/cart/components/cart-group/cart-group.component';
import { RoundButtonModule } from 'src/app/shared/modules/round-button/round-button.module';
import { MatIconModule } from '@angular/material/icon';
import { ButtonPlayItemModule } from 'src/app/shared/modules/button-play-item/button-play-item.module';

const routes: Routes = [
  {
    path: '', component: CartReviewComponent
  }
];

@NgModule({
  declarations: [
    CartReviewComponent, 
    MainHeaderComponent, 
    ComponentContainerComponent, 
    CartComponent, 
    CartGroupComponent,
    ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    MatIconModule,
    RoundButtonModule,
    ButtonPlayItemModule
  ],
  exports: []
})
export class CartReviewModule { }
