import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';
import { ITrack } from 'src/app/shared/models/track';

@Component({
  selector: 'gs-selling-preferences',
  templateUrl: './selling-preferences.component.html',
  styleUrls: ['../../track-form.component.css',
              './selling-preferences.component.css'],
  viewProviders: [{provide: ControlContainer, useExisting: FormGroupDirective}]
})
export class SellingPreferencesComponent implements OnInit {
  @Input() track!: ITrack;
  freeDownload: boolean;
  constructor(private control: FormGroupDirective) { }

  ngOnInit() {
  }

}
