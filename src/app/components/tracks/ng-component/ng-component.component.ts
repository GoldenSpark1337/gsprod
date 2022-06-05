import { Component, OnInit } from '@angular/core';

@Component({
  selector: '',
  templateUrl: './ng-component.component.html',
  styleUrls: ['./ng-component.component.css']
})
export class NgComponent implements OnInit {
  links: any[] = [];
  constructor() { }

  ngOnInit() {
    this.links = [{label: "My Tracks", path: "/tracks/my-tracks"}, {label: "Drafts", path: "/tracks/drafts"}];
  }

}
