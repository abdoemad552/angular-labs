import { Directive, ElementRef, HostListener, inject, input } from '@angular/core';

@Directive({
  selector: '[attrDir]',
})
export class AttrDirDirective {
  attrDir = input<string>('yellow');

  private el = inject(ElementRef);

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight(this.attrDir());
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
