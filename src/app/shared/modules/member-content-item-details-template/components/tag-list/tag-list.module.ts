import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SquareButtonModule } from '../../../square-button/square-button.module';
import { TagListComponent } from './tag-list.component';

@NgModule({
    imports: [
        CommonModule,
        SquareButtonModule
    ],
    declarations: [TagListComponent],
    exports: [TagListComponent],
    providers: [],
})
export class TagListModule { }
