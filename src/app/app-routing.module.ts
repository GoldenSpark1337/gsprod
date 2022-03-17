import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { HomeModule } from "./components/home/home.module";
import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { TestErrorsComponent } from "./errors/test-errors/test-errors.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
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
        path: 'checkout',
        loadChildren: () => import("./components/cart-review/cart-review.module").then(m => m.CartReviewModule)
    },
    {
        path: 'search',
        loadChildren: () => import("./components/search/component.module").then(m => m.ComponentModule)
    },
    {
        path: 'account',
        loadChildren: () => import("./components/auth/auth.module").then(m => m.AuthModule)
    },
    {
        path: 'errors',
        component: TestErrorsComponent
    },
    {path: 'not-found', component: NotFoundComponent},
    {
        path: '**',
        component: NotFoundComponent,
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}