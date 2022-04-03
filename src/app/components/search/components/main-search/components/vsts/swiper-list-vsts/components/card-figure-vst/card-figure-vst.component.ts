import { Component, Input, OnInit } from '@angular/core';
import { IVst } from 'src/app/shared/models/vst';

@Component({
  selector: 'gs-card-figure-vst',
  templateUrl: './card-figure-vst.component.html',
  styleUrls: ['./card-figure-vst.component.css']
})
export class CardFigureVstComponent implements OnInit {
  @Input() vst: IVst;
  constructor() { }

  ngOnInit(): void {
  }

}
