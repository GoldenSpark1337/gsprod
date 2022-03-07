import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { SectionSearchForBeatsComponent } from './components/section-search-for-beats/section-search-for-beats.component';
import { SectionMusicDistributionComponent } from './components/section-music-distribution/section-music-distribution.component';
import { SectionHowItWorksComponent } from './components/section-how-it-works/section-how-it-works.component';
import { RouterModule, Routes } from '@angular/router';
import { FullscreenVideoComponent } from './components/section-search-for-beats/components/fullscreen-video/fullscreen-video.component';
import { ComponentContainerComponent } from './components/section-search-for-beats/components/component-container/component-container.component';
import { InputSearchBeatsComponent } from './components/section-search-for-beats/components/component-container/components/input-search-beats/input-search-beats.component';
import { MaterialModule } from 'src/app/core/material.module';
import { MatIconModule } from '@angular/material/icon';
import { MenuComponent } from './components/section-search-for-beats/components/component-container/components/menu/menu.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
    { path: 'home', component: HomeComponent }
]


@NgModule({
    imports: [
        CommonModule, 
        FormsModule, 
        BrowserAnimationsModule, 
        RouterModule.forChild(routes), 
        MaterialModule,
        MatIconModule],
    exports: [HomeComponent],
    declarations: [
        HomeComponent, 
        SectionSearchForBeatsComponent,
        SectionMusicDistributionComponent, 
        SectionHowItWorksComponent,
        FullscreenVideoComponent,
        ComponentContainerComponent,
        InputSearchBeatsComponent,
        MenuComponent],
    providers: [],
})
export class HomeModule { }
