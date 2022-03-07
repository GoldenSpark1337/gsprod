import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => import("./components/auth/components/login/login.component").then(m => m.LoginComponent)
    },
    {
        path: 'dashboard',
        loadChildren: () => import("./components/dashboard/dashboard.module").then(m => m.DashboardModule)
    },
    {
        path: 'search',
        loadChildren: () => import("./components/search/component.module").then(m => m.ComponentModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}