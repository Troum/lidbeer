import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appButton]'
})
export class ButtonDirective implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  @Input() appButton: string;

  ngOnInit() {
    const span = this.renderer.createElement('span');
    const text = this.renderer.createText(`${this.appButton}`);
    if (window.innerWidth <= 576) {
      this.renderer.removeClass(this.el.nativeElement, 'btn-lg');
    }
    this.renderer.appendChild(span, text);
    this.renderer.appendChild(this.el.nativeElement, span);
  }

}
