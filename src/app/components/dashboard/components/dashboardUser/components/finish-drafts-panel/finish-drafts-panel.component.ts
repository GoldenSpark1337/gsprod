import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { TrackParams } from 'src/app/shared/models/params/trackParams';
import { IProduct } from 'src/app/shared/models/product';
import { ITrack } from 'src/app/shared/models/track';
import { AccountService } from 'src/app/shared/services/account.service';
import { TrackService } from 'src/app/shared/services/track.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'gs-finish-drafts-panel',
  templateUrl: './finish-drafts-panel.component.html',
  styleUrls: ['./finish-drafts-panel.component.css']
})
export class FinishDraftsPanelComponent implements OnInit {
  trackParams = new TrackParams({isDraft: true});
  drafts$: Observable<IProduct[]> = this.accountService.currentUser$.pipe(
    switchMap(u => this.userService.getProducts(u.username, true))
  );

  constructor(private userService: UserService, private accountService: AccountService) { }

  ngOnInit(): void {
  }

  getDrafts() {

  }
}
