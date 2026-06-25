import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[zoomHover]',
})
export class ItemZoomDirective {
  constructor(private el: ElementRef<HTMLElement>) {
    this.el.nativeElement.style.transition = 'transform 200ms ease';
    this.el.nativeElement.style.display = 'inline-block';
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    console.log('Mouse is over...');
    this.el.nativeElement.style.transform = `scale(1.05)`;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.transform = 'scale(1)';
  }
}
