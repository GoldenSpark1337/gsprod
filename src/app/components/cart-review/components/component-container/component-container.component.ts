import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'gs-component-container',
  templateUrl: './component-container.component.html',
  styleUrls: ['./component-container.component.css']
})
export class ComponentContainerComponent implements OnInit {
  @Input()
  templateRef!: TemplateRef<any>;
  
  constructor() { }

  ngOnInit() {
  }

}
