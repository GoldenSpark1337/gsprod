import { Component, ViewChild } from "@angular/core";
import { MatMenuItem, MatMenuTrigger } from "@angular/material/menu";

@Component({
    selector: 'gs-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})

export class MenuComponent {
    options: string[] = ["All", "Tracks", "Musicians", "Playlists", "Sound kits", "Services"];

    private _searchString: string = "Tracks";

    public get searchString(): string {
        return this._searchString;
    }
    public set searchString(value: string) {
        this._searchString = value;
    }

    setSearchString(option: string) {
        this._searchString = option;
    }


    @ViewChild('searchTrigger')
    trigger!: MatMenuTrigger;

    openMenu(): void {
        this.trigger.openMenu();
    }

    closeMenu(): void {
        this.trigger.closeMenu();
    }
}