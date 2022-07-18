import { Component } from '@angular/core';
import { IRendererComponent, IRendererParams } from 'spread-table';

@Component({
  selector: 'app-st-custom-renderer',
  templateUrl: './st-custom-renderer.component.html',
  styleUrls: ['./st-custom-renderer.component.css']
})
export class StCustomRendererComponent implements IRendererComponent {
  params: IRendererParams | undefined;

  text: string = '';
  constructor() { }
  stInit(params: IRendererParams) {
    this.params = params;
    this.text = params.value.split('/').pop();
  }
}
