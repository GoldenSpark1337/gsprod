import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { ServiceDashboardDragService } from './shared/service-dashboard-drag.service';

@Component({
  selector: 'gs-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})

export class DashboardUserComponent implements OnInit {
  @Output() onChanged = new EventEmitter<boolean>();
  public isDraggable: boolean = false;

  constructor(
    private sharedDraggable: ServiceDashboardDragService
    ) 
  { }

  ngOnInit(): void {
  }

  get staticIsDraggable() {
    return this.isDraggable;
  }

  customizable(): void {
    this.isDraggable = !this.isDraggable;
    this.sharedDraggable.loadDraggable(this.isDraggable);
    this.onChanged.emit(this.isDraggable);
    console.log(this.isDraggable);
  }
}
