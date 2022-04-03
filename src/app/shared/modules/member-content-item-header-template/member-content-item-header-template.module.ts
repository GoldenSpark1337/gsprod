import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberContentItemHeaderTemplateComponent } from './member-content-item-header-template.component';
import { ButtonAddTrackToPlaylistComponent } from './components/button-add-track-to-playlist/button-add-track-to-playlist.component';
import { ButtonLikeActionTemplateComponent } from './components/button-like-action-template/button-like-action-template.component';
import { ButtonItemActionIconTemplateComponent } from './components/button-item-action-icon-template/button-item-action-icon-template.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ButtonFreeDownloadTrackComponent } from './components/button-free-download-track/button-free-download-track.component';
import { SquareButtonModule } from '../square-button/square-button.module';
import { HorizontalSeparatorModule } from '../horizontal-separator/horizontal-separator.module';
import { BuyBtnFromProductComponent } from './components/buy-btn-from-product/buy-btn-from-product.component';
import { BtnBuyFromTemplateModule } from '../btn-buy-from-track/components/btn-buy-from-template/btn-buy-from-template.module';
import { ImageModule } from './components/image/image.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MemberContentItemHeaderTemplateComponent,
    ButtonAddTrackToPlaylistComponent,
    ButtonLikeActionTemplateComponent,
    ButtonItemActionIconTemplateComponent,
    ButtonFreeDownloadTrackComponent,
    BuyBtnFromProductComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    SquareButtonModule,
    HorizontalSeparatorModule,
    BtnBuyFromTemplateModule,
    ImageModule,
    RouterModule
  ],
  exports: [
    MemberContentItemHeaderTemplateComponent
  ]
})
export class MemberContentItemHeaderTemplateModule { }
