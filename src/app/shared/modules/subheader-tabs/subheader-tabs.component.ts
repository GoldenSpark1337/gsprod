import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gs-subheader-tabs',
  templateUrl: './subheader-tabs.component.html',
  styleUrls: ['./subheader-tabs.component.css']
})
export class SubheaderTabsComponent implements OnInit {
  @Input() links: any[] = [];
  activeLink: any;
  constructor() { }

  ngOnInit() {
    this.activeLink = this.links[0];
    console.log(this.activeLink)
  }

}
