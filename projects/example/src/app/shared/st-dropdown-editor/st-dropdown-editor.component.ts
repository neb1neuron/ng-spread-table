import { Component, EventEmitter } from '@angular/core';
import { IEditorComponent, IEditorParams } from 'spread-table';

@Component({
  selector: 'app-st-dropdown-editor',
  templateUrl: './st-dropdown-editor.component.html',
  styleUrls: ['./st-dropdown-editor.component.scss']
})
export class StDropdownEditorComponent implements IEditorComponent {
  setValue: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  params: IEditorParams | undefined;

  stInit(params: IEditorParams) {
    this.params = params;
  }

  select(item: any) {
    this.setValue.emit(+item.target.value);
  }
}
