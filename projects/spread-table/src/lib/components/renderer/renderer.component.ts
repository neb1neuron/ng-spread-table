import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ArgumentOutOfRangeError, BehaviorSubject } from 'rxjs';
import { IRenderer, IRendererComponent, IRendererParams } from '../../models/renderer.models';
import { DefaultRendererComponent } from '../default-renderer/default-renderer.component';
import { RendererDirective } from './renderer.directive';


@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.scss']
})
export class RendererComponent implements OnInit, IRenderer {

  @Input() rendererParams: IRendererParams;

  defaultRenderer = DefaultRendererComponent;

  constructor() { }

  getValue() {
    throw new Error('Method not implemented.');
  }


  @ViewChild(RendererDirective, { static: true }) rendererContainer!: RendererDirective;

  ngOnInit() {
    this.render();

    (this.rendererParams.reDraw as BehaviorSubject<{ columnIndex: number, rowIndex: number }[]>)
      .subscribe(arg => {
        if (arg.length && arg.find(cell => cell.rowIndex === this.rendererParams.rowIndex && cell.columnIndex === this.rendererParams.columnIndex)) {
          this.render();
        }
      });

  }

  private render() {
    const viewContainerRef = this.rendererContainer.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<IRendererComponent>(this.rendererParams.rendererComponent ? this.rendererParams.rendererComponent : this.defaultRenderer);
    this.rendererParams.value = this.rendererParams.data[this.rendererParams.rowIndex].cells[this.rendererParams.columnIndex].value;
    componentRef.instance.stInit(this.rendererParams);
  }
}
