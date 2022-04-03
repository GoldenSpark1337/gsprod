import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { HomeModule } from "./components/home/home.module";
import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { TestErrorsComponent } from "./errors/test-errors/test-errors.component";
import { AuthGuard } from "./_guard/auth.guard";

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
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'dashboard', loadChildren: () => import("./components/dashboard/dashboard.module")
                .then(m => m.DashboardModule), canActivate: [AuthGuard]},
            {path: 'purchased', loadChildren: () => import("./components/users/purchased/purchased.module")
                .then(m => m.PurchasedModule)},
            {path: 'account/edit', loadChildren: () => import("./components/users/wrapper-member-profile-content/components/account-settings/account-settings.module")
                .then(m => m.AccountSettingsModule)}
        ]
    },
    {path:'users/:username', loadChildren: () => import("./components/users/wrapper-member-profile-content.module").then(m => m.WrapperMemberProfileContentModule)},
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
    // {
    //     path: 'tracks'
    //     //
    // },
    {
        path: 'tracks/:id',
        loadChildren: () => 
            import("./components/tracks/wrapper-member-track-content/wrapper-member-track-content.module")
                .then(m => m.WrapperMemberTrackContentModule)
    },
    {
        path: 'kits/:id',
        loadChildren: () => 
            import("./components/kits/wrapper-member-soundkit-content/wrapper-member-soundkit-content.module")
                .then(m => m.WrapperMemberSoundkitContentModule)
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