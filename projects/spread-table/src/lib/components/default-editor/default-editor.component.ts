import { Component, EventEmitter } from '@angular/core';
import { IEditorComponent, IEditorParams } from '../../models/editor.models';

@Component({
  selector: 'app-default-editor',
  templateUrl: './default-editor.component.html',
  styleUrls: ['./default-editor.component.scss']
})
export class DefaultEditorComponent implements IEditorComponent {
  setValue: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  params: IEditorParams;

  stInit(params: IEditorParams) {
    this.params = params;
  }

  onKeyDown(e: Event) {
    let event = e as KeyboardEvent;

    if (event.key === 'Enter' || event.key === 'Escape') {
      this.setValue.emit(this.params.input.value!);
    }

    e.stopPropagation();
  }
}
