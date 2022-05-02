import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'gs-tags-input',
  templateUrl: './tags-input.component.html',
  styleUrls: ['./tags-input.component.css'],
  viewProviders: [{provide: ControlContainer, useExisting: NgForm}]
})
export class TagsInputComponent implements OnInit {
  @Input() tags: any[] = [];
  @Output() tagsChanged = new EventEmitter<string>();
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  constructor(public control : NgForm) { }

  ngOnInit() {
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.tags.push(value);
      this.tagsChanged.emit(value);
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
