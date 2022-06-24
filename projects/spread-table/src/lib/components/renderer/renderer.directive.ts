import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[renderer]'
})
export class RendererDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
