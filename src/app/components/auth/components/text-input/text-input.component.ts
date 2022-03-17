import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'gs-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInpurComponent implements OnInit {
  @Input() model: any = {};
  @Input() name: string = "";
  @Input() placeHolder: string = "";
  @Input() id: string = "";
  @Input() type: string = "";
  @Input() tabindex: number;

  @Output() modelChange = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

}
