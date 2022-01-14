import { Component, Input, OnInit } from '@angular/core';
import { DashboardUserComponent } from '../dashboardUser/dashboard-user.component';
import { ServiceDashboardDragService } from '../dashboardUser/shared/service-dashboard-drag.service';

@Component({
  selector: 'gs-dashboard-panel',
  templateUrl: './dashboard-panel.component.html',
  styleUrls: ['./dashboard-panel.component.css'],
  providers: [DashboardUserComponent]
})
export class DashboardPanelComponent implements OnInit {
  @Input()
  isDraggable: boolean = false;

  constructor(
    private sharedDraggable: ServiceDashboardDragService
  ) 
  { }

  ngOnInit(): void {
    this.sharedDraggable.getDraggable().subscribe(d => {
      this.isDraggable = d;
    })
  }

  

}
