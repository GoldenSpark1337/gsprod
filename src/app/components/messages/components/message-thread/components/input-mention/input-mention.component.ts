import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'gs-input-mention',
  templateUrl: './input-mention.component.html',
  styleUrls: ['./input-mention.component.css'],
  viewProviders: [{provide: ControlContainer, useExisting: NgForm}]
})
export class InputMentionComponent implements OnInit {
  @Input() message: string;
  @Output() messageChange: any = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onText(value: any) {
    this.message = value;
    this.messageChange.emit(value);
  }
}
