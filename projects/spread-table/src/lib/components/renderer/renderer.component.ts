import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { IRenderer, IRendererComponent, IRendererParams } from '../../models/renderer.models';
import { DefaultRendererComponent } from '../default-renderer/default-renderer.component';
import { RendererDirective } from './renderer.directive';


@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.scss']
})
export class RendererComponent implements IRenderer, OnChanges {

  @Input() rendererParams: IRendererParams;

  defaultRenderer = DefaultRendererComponent;

  constructor() { }

  @ViewChild(RendererDirective, { static: true }) rendererContainer!: RendererDirective;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && this.rendererParams) {
      this.render();
    }
  }

  private render() {
    const viewContainerRef = this.rendererContainer.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<IRendererComponent>(this.rendererParams.rendererComponent ? this.rendererParams.rendererComponent : this.defaultRenderer);
    componentRef.instance.stInit(this.rendererParams);
  }
}
