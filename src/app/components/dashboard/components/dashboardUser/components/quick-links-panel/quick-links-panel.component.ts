import { Component, ContentChild, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';
import { TrackService } from 'src/app/shared/services/track.service';
import { DashboardUserComponent } from '../../dashboard-user.component';

@Component({
  selector: 'gs-quick-links-panel',
  templateUrl: './quick-links-panel.component.html',
  styleUrls: ['./quick-links-panel.component.css'],
  providers: [DashboardUserComponent]
})
export class QuickLinksPanelComponent implements OnInit {
  @Input()
  addNewContent!: TemplateRef<any>;
  newTrackId: number;
  newServiceId: number;

  constructor(
    private dashboardUserComponent: DashboardUserComponent, 
    private trackService: TrackService, 
    private soundServiceService: ProductService,
    private router: Router) 
  {
  }

  ngOnInit(): void {
  }

  newTrack() {
    this.trackService.createTrack().subscribe((id: number) => {
      if (id) {
        this.newTrackId = id;
        this.router.navigateByUrl(`/tracks/edit/${id}`);
      }
    });
  }

  newService() {
    this.soundServiceService.createService().subscribe((id: number) => {
      if (id) {
        this.newTrackId = id;
        this.router.navigateByUrl(`/services/edit/${id}`);
      }
    });
  }
}
