import { Component, OnInit, Renderer2 } from '@angular/core';
import { Directive } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';

@Directive({ selector: '[isolate]' })
  export class NameDirective {
    constructor() { }
    
  }

@Component({
  selector: 'gs-categories-radio-group',
  templateUrl: './categories-radio-group.component.html',
  styleUrls: ['./categories-radio-group.component.css']
})
export class CategoriesRadioGroupComponent implements OnInit {
  categories: string[] = ["Tracks", "Musicians", "Playlists", "Sound Kits", "Services"];
  private _isToggle: boolean = false;
  public get isToggle(): boolean {
    return this._isToggle;
  }
  public set isToggle(value: boolean) {
    this._isToggle = value;
  }
  constructor(private renderer: Renderer2, private router: Router) { }

  ngOnInit(): void {
  }

  toggle(event: any) {
    this.isToggle = !this.isToggle;
  }

  menuToggle(event:any) {
    this.renderer.addClass(event.target,"selected");
  }
  
  isSelected(toRoute: string): boolean {
    return this.router.isActive(`/${toRoute}`, true);
  }

  navigateTo(toRoute: string) {
    this.router.navigateByUrl(`/${toRoute}`);
  }
}
