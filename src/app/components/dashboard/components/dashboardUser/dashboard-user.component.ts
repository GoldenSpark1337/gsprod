import { Component, EventEmitter, OnInit, OnDestroy, Output } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { ServiceDashboardDragService } from './shared/service-dashboard-drag.service';

@Component({
  selector: 'gs-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})

export class DashboardUserComponent implements OnInit, OnDestroy {
  @Output() onChanged = new EventEmitter<boolean>();
  public isDraggable: boolean = false;

  constructor(
    private sharedDraggable: ServiceDashboardDragService,
    private dragulaService: DragulaService
    ) 
  {
    const bag: any = this.dragulaService.find('DASHBOARD_PANELS');
    if (bag !== undefined ) this.dragulaService.destroy('DASHBOARD_PANELS');
    this.dragulaService.createGroup("DASHBOARD_PANELS", {
      removeOnSpill: false,
      moves: (el, source, handle) => {
        if (el?.classList.contains("block-drag")) { return false; }
        return true;
      },
      accepts: (el, target, source, sibling) => {
        if (sibling === null) {
          return false
        }
        return true;
      }
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.dragulaService.destroy("DASHBOARD_PANELS");
  }

  get staticIsDraggable() {
    return this.isDraggable;
  }

  customizable(): void {
    this.isDraggable = !this.isDraggable;
    this.sharedDraggable.loadDraggable(this.isDraggable);

    if (this.isDraggable == true) {
      this.ngOnDestroy();
      this.dragulaService.createGroup("DASHBOARD_PANELS", {
        moves: (el, source, handle) => {
          console.log("fsafsa");
          return true;
        }
      })
    }
    this.onChanged.emit(this.isDraggable);
    console.log(this.isDraggable);
  }
}
