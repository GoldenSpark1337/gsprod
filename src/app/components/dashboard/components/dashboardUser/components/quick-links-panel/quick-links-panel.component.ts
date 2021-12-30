import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'gs-quick-links-panel',
  templateUrl: './quick-links-panel.component.html',
  styleUrls: ['./quick-links-panel.component.css']
})
export class QuickLinksPanelComponent implements OnInit {
  @Input()
  addNewContent!: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }
}
