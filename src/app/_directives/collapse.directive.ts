import {Directive, ElementRef, Input, OnChanges, Renderer2} from '@angular/core';

@Directive({
  selector: '[appCollapse]'
})
export class CollapseDirective implements OnChanges {
  @Input() appCollapse: boolean;
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnChanges() {
    this.appCollapse ? this.renderer.addClass(this.el.nativeElement, 'active') : this.renderer.removeClass(this.el.nativeElement, 'active');
  }
}
