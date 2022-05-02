import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { TagsInputComponent } from './tags-input.component';

@NgModule({
    imports: [
        CommonModule,
        MatChipsModule,
        MatButtonModule,
        MatIconModule,
        FormsModule
    ],
    declarations: [TagsInputComponent],
    exports: [TagsInputComponent],
    providers: [],
})
export class TagsInputModule { }
