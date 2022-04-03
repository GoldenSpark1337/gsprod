import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gs-member-content-item-header-template',
  templateUrl: './member-content-item-header-template.component.html',
  styleUrls: ['./member-content-item-header-template.component.css']
})
export class MemberContentItemHeaderTemplateComponent implements OnInit {
  @Input() product: any;
  constructor() { }

  ngOnInit(): void {
  }

}
