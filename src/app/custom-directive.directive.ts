import { Directive, ElementRef, HostListener, Input, Renderer2, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  @Input('appCustomDirective') fontSize: string | undefined;
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor('red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor(null); // Revert to the default background color
  }

  private changeColor(color: string | null) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['fontSize']) {
      this.renderer.setStyle(this.el.nativeElement, 'font-size', this.fontSize);
    }
  }

}