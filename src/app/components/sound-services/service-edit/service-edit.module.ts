import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceEditComponent } from './service-edit.component';
import { MainHeaderModule } from 'src/app/shared/modules/main-header/main-header.module';
import { RouterModule, Routes } from '@angular/router';
import { ServiceFormModule } from './components/service-form/service-form.module';

const routes: Routes = [
  {path: '', component: ServiceEditComponent}
];

@NgModule({
  imports: [
    CommonModule,
    MainHeaderModule,
    ServiceFormModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ServiceEditComponent]
})
export class ServiceEditModule { }
