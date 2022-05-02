import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gs-content-creation-artwork',
  templateUrl: './content-creation-artwork.component.html',
  styleUrls: ['./content-creation-artwork.component.css']
})
export class ContentCreationArtworkComponent implements OnInit {
  @Input() productImage: any;

  constructor() { }

  ngOnInit() {
  }

}
