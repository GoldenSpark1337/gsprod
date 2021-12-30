import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MaterialModule } from "src/app/core/material.module";
import { FormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { DashboardUserModule } from "./components/dashboardUser/dashboard-user.module"

import { DashboardComponent } from "./dashboard.component";
import { QuickStatsComponent } from './components/quick-stats/quick-stats.component';
import { QuickStatsPanelsComponent } from "./components/quick-stats/components/quick-stats-panels/quick-stats-panels.component";

const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent }
]

@NgModule({
    declarations: [DashboardComponent, QuickStatsComponent, QuickStatsPanelsComponent],
    imports:[
        CommonModule, 
        FormsModule, 
        RouterModule.forChild(routes), 
        MaterialModule, 
        MatIconModule, 
        DashboardUserModule],
    exports: []
})

export class DashboardModule {}