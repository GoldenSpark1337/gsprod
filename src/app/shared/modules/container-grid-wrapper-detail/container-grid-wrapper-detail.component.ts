import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gs-container-grid-wrapper-detail',
  templateUrl: './container-grid-wrapper-detail.component.html',
  styleUrls: ['./container-grid-wrapper-detail.component.css']
})
export class ContainerGridWrapperDetailComponent implements OnInit {
  @Input() product: any;
  constructor() { }

  ngOnInit(): void {
  }

}
