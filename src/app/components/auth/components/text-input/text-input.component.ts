import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Self, ViewChild } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'gs-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInpurComponent implements OnInit, ControlValueAccessor {
  @ViewChild("input", {static: true}) input: ElementRef;
  @Input() name: string = "";
  @Input() placeHolder: string = "";
  @Input() id: string = "";
  @Input() type: string = "text";
  @Input() label: string;
  @Input() tabindex: number;

  constructor(@Self() public controlDir: NgControl) 
  {
    this.controlDir.valueAccessor = this;
  }

  ngOnInit(): void {
    const control = this.controlDir.control;
    const validators = control.validator ? [control.validator] : [];
    const asyncValidators = control.asyncValidator ? [control.asyncValidator] : [];

    control.setValidators(validators);
    control.setAsyncValidators(asyncValidators);
    control.updateValueAndValidity();
  }

  onChange($event) {}

  onTouched() {}
  
  writeValue(obj: any): void {
    this.input.nativeElement.value = obj || "";
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
