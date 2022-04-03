import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gs-member-content-item-details-template',
  templateUrl: './member-content-item-details-template.component.html',
  styleUrls: ['./member-content-item-details-template.component.css']
})
export class MemberContentItemDetailsTemplateComponent implements OnInit {
  @Input() product: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
