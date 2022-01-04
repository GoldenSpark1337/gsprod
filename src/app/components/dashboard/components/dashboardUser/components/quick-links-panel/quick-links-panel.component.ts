import { Component, ContentChild, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { DashboardUserComponent } from '../../dashboard-user.component';

@Component({
  selector: 'gs-quick-links-panel',
  templateUrl: './quick-links-panel.component.html',
  styleUrls: ['./quick-links-panel.component.css'],
  providers: [DashboardUserComponent]
})
export class QuickLinksPanelComponent implements OnInit {
  @Input()
  addNewContent!: TemplateRef<any>;

  constructor(private dashboardUserComponent: DashboardUserComponent) 
  {
  }

  ngOnInit(): void {
  }
}
