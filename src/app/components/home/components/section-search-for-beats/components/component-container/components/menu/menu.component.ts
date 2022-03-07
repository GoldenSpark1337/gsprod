import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'gs-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  options: string[] = ["All", "Tracks", "Musicians", "Playlists", "Sound kits", "Services"];

  private _searchString: string = "Tracks";

  public get searchString(): string {
      return this._searchString;
  }
  public set searchString(value: string) {
      this._searchString = value;
  }

  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  constructor() { }

  ngOnInit(): void {
  }

  setSearchString(options: string): void {
    this._searchString = options;
  }

  openMenu(): void {
    this.trigger.openMenu();
  }

  closeMenu(): void {
    this.trigger.closeMenu();
  }
}
