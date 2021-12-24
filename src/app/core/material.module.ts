import {NgModule} from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from '@angular/material/select';

const materials = [
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatSelectModule,
]

@NgModule({
    exports: [
        materials
    ]
})

export class MaterialModule {}