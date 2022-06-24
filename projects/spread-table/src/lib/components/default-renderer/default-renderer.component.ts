import { Component, EventEmitter } from '@angular/core';
import { IRendererComponent, IRendererParams } from '../../models/renderer.models';

@Component({
  selector: 'app-default-renderer',
  templateUrl: './default-renderer.component.html',
  styleUrls: ['./default-renderer.component.scss']
})
export class DefaultRendererComponent implements IRendererComponent {

  constructor() { }

  params: IRendererParams;

  stInit(params: IRendererParams) {
    this.params = params;
  }
}
