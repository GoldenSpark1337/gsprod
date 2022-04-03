import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YourOrdersComponent } from './your-orders.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [YourOrdersComponent],
  exports: [YourOrdersComponent]
})
export class YourOrdersModule { }
