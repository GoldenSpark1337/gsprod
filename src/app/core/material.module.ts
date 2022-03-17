import {NgModule} from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSliderModule} from '@angular/material/slider';

const materials = [
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatDialogModule,
    MatTooltipModule,
    MatSliderModule
]

@NgModule({
    exports: [
        materials
    ]
})

export class MaterialModule {}