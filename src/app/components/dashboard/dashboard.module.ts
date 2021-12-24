import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MaterialModule } from "src/app/core/material.module";

import { DashboardComponent } from "./dashboard.component";
import { QuickStatsComponent } from './components/quick-stats/quick-stats.component';
import { MatIconModule } from "@angular/material/icon";
import { QuickStatsPanelsComponent } from "./components/quick-stats/components/quick-stats-panels/quick-stats-panels.component";
import { DashboardUserComponent } from "./components/dashboardUser/dashboard-user.component";

const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent }
]

@NgModule({
    declarations: [DashboardComponent, QuickStatsComponent, QuickStatsPanelsComponent, DashboardUserComponent],
    imports:[CommonModule, RouterModule.forChild(routes), MaterialModule, MatIconModule],
    exports: []
})

export class DashboardModule {}