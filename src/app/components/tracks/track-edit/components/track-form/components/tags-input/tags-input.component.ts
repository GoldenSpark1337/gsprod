import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ControlContainer, FormGroupDirective } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'gs-tags-input',
  templateUrl: './tags-input.component.html',
  styleUrls: ['./tags-input.component.css'],
  viewProviders: [{provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class TagsInputComponent implements OnInit {
  @Input() tags: any[] = [];
  @Output() tagsChanged = new EventEmitter<string>();
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  constructor(public control: FormGroupDirective, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value && (!this.tags.includes(value)) && (this.tags.length < 3)) {
      this.tags.push(value);
      this.tagsChanged.emit(value);
    } else {
      let config = new MatSnackBarConfig();
      config.duration = 8000;
      this.snackBar.open("Тек 3 қайталанбаған тег енгізіңіз", "OK", config);
    }

    event.chipInput!.clear();
  }

  remove(tag: any): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }
}
