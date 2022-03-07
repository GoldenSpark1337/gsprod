import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'gs-top-nav-menu',
  templateUrl: './top-nav-menu.component.html',
  styleUrls: ['./top-nav-menu.component.css']
})
export class TopNavMenuComponent implements OnInit {
  @Output() onChanged = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  change(isHovered:any) {
    this.onChanged.emit(isHovered);
  }
}
