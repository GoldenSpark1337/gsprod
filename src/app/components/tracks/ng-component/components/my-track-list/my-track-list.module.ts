import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTrackListComponent } from './my-track-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MenuMoreOptionsModule } from 'src/app/shared/modules/menu-more-options/menu-more-options.module';
import { ButtonDownloadModule } from 'src/app/shared/modules/button-download/button-download.module';
import { ButtonEditModule } from 'src/app/shared/modules/button-edit/button-edit.module';
import { ButtonAddToTracklistModule } from 'src/app/shared/modules/button-add-to-tracklist/button-add-to-tracklist.module';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MenuMoreOptionsModule,
    ButtonAddToTracklistModule,
    ButtonDownloadModule,
    ButtonEditModule
  ],
  declarations: [MyTrackListComponent],
  exports: [MyTrackListComponent]
})
export class MyTrackListModule { }
