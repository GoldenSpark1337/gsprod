import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from "src/app/core/material.module";


import { TopNavbarComponent } from "./top-navbar.component";
import { SearchTrackTopBarComponent } from "./components/search-track-top-bar/search-track-top-bar.component";
import { MenuComponent } from "./components/menu/menu.component";
import { WalletAvailableBalanceComponent } from './components/wallet-available-balance/wallet-available-balance.component';
import { NotificationsListComponent } from './components/notifications-list/notifications-list.component';
import { TopNavMenuComponent } from './components/top-nav-menu/top-nav-menu.component';
import { BadgeCounterComponent } from './components/badge-counter/badge-counter.component';
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [TopNavbarComponent, SearchTrackTopBarComponent, MenuComponent, WalletAvailableBalanceComponent, NotificationsListComponent, TopNavMenuComponent, BadgeCounterComponent],
    imports: [CommonModule, FormsModule, BrowserAnimationsModule, MaterialModule, MatIconModule, FlexLayoutModule, RouterModule],
    exports: [TopNavbarComponent]
})

export class TopNavbarModule {
    
}