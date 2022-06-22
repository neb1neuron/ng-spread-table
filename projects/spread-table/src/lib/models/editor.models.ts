import { EventEmitter, Type } from "@angular/core";

export interface IEditorComponent {
  stInit(params: IEditorParams);
  setValue: EventEmitter<any>;
}

export interface IEditor {
  editorParams: IEditorParams;
  setValue: EventEmitter<any>;
}

export interface IEditorParams {
  editorComponent: Type<any>;
  data: any;
  [otherProperty: string | number | symbol]: any;
}
