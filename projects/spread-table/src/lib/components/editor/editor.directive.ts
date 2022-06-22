import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[editor]'
})
export class EditorDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
