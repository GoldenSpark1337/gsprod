import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "src/app/core/material.module";
import { MatIconModule } from "@angular/material/icon";
import { YouTubePlayerModule } from '@angular/youtube-player';
import { DragulaModule } from 'ng2-dragula';

import { DashboardUserComponent } from './dashboard-user.component';
import { DashboardPanelComponent } from '../dashboard-panel/dashboard-panel.component';
import { MenuMoreOptionsComponent } from '../dashboard-panel/components/menu-more-options/menu-more-options.component'
import { AddNewContentComponent } from './components/add-new-content/add-new-content.component';
import { AnnouncementPanelComponent } from './components/announcement-panel/announcement-panel.component';
import { FinishDraftsPanelComponent } from './components/finish-drafts-panel/finish-drafts-panel.component';
import { LatestSalesPanelComponent } from './components/latest-sales-panel/latest-sales-panel.component';
import { LearnPanelComponent } from './components/learn-panel/learn-panel.component';
import { QuickLinksPanelComponent } from './components/quick-links-panel/quick-links-panel.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        DashboardUserComponent, 
        DashboardPanelComponent,
        MenuMoreOptionsComponent,
        AnnouncementPanelComponent, 
        FinishDraftsPanelComponent, 
        LatestSalesPanelComponent,
        LearnPanelComponent,
        QuickLinksPanelComponent,
        AddNewContentComponent 
    ],
    imports: [
        CommonModule, 
        MaterialModule, 
        MatIconModule,
        FormsModule,
        YouTubePlayerModule,
        DragulaModule
    ],
    exports: [DashboardUserComponent],
    providers: [],
})
export class DashboardUserModule { }

