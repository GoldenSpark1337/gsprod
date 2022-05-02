import { Component, EventEmitter, OnInit, OnDestroy, Output } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { Observable } from 'rxjs';
import { last, map, take } from 'rxjs/operators';
import { ServiceDashboardDragService } from './shared/service-dashboard-drag.service';

@Component({
  selector: 'gs-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})

export class DashboardUserComponent implements OnInit, OnDestroy {
  public isDraggable$: Observable<boolean> = this.sharedDraggable.getDraggable();

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
    const bag: any = this.dragulaService.find('DASHBOARD_PANELS');
    if (bag !== undefined ) this.dragulaService.destroy('DASHBOARD_PANELS');
  }

  customizable(): void {
    this.isDraggable$.pipe(
      take(1),
      map((initDrag: boolean) => {
        let drag = !initDrag;
        this.sharedDraggable.loadDraggable(drag);
        console.log(drag)
        this.ngOnDestroy();
        this.dragulaService.createGroup("DASHBOARD_PANELS", {
          removeOnSpill: false,
          moves: function (el:any, container:any, handle:any):any { 
            debugger
            console.log(el, container);
            if (drag) {
              if (el?.classList.contains("block-drag")) { return false; }
              return true;
            }
            else {
              console.log("ekf")
              return false;
            }
          },
          accepts: (el, target, source, sibling) => {
        if (sibling === null) {
          return false
        }
        return true;
      }
        })
      })
    ).subscribe();
  }
}
