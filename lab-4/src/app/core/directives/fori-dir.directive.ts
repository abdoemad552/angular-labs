import { Directive, inject, input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[forI]',
})
export class ForiDirDirective implements OnInit {
  private templateRef = inject(TemplateRef);
  private viewContainerRef = inject(ViewContainerRef);

  forI = input.required<string>();

  ngOnInit() {
    const param = this.forI().split(';');
    let x = parseInt(param[0].split('=')[1]);
    let y = parseInt(param[1].split('<')[1]);

    for (let i = x; i < y; i++) {
      this.viewContainerRef.createEmbeddedView(this.templateRef, {});
    }
  }
}
