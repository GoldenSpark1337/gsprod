import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceDashboardDragService {

  private isDraggable = new BehaviorSubject<boolean>(false);

  constructor() { }

  loadDraggable(sender: boolean) {
    this.isDraggable.next(sender);
  }

  getDraggable(): Observable<boolean> {
    return this.isDraggable.asObservable();
  }
}
