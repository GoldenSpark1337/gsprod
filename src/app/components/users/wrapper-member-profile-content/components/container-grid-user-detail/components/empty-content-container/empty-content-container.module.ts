import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyContentContainerComponent } from './empty-content-container.component';
import { EmptyContentModule } from './components/empty-content/empty-content.module';

@NgModule({
  imports: [
    CommonModule,
    EmptyContentModule
  ],
  declarations: [EmptyContentContainerComponent],
  exports: [EmptyContentContainerComponent]
})
export class EmptyContentContainerModule { }
