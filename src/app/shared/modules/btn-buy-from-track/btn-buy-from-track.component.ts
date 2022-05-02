import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gs-btn-buy-from-track',
  templateUrl: './btn-buy-from-track.component.html',
  styleUrls: ['./btn-buy-from-track.component.css']
})
export class BtnBuyFromTrackComponent implements OnInit {
  @Input() track: any;
  constructor() { }

  ngOnInit(): void {
  }

}
