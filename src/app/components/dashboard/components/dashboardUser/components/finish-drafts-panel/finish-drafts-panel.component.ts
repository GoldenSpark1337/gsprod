import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gs-finish-drafts-panel',
  templateUrl: './finish-drafts-panel.component.html',
  styleUrls: ['./finish-drafts-panel.component.css']
})
export class FinishDraftsPanelComponent implements OnInit {
  draftsList: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
