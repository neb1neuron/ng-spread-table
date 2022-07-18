import { EventEmitter, Type } from "@angular/core";

interface IEditorComponent {
  stInit(params: IEditorParams);
  setValue: EventEmitter<any>;
}

interface IEditor {
  editorParams: IEditorParams;
  setValue: EventEmitter<any>;
}

interface IEditorParams {
  editorComponent: Type<any>;
  data: any;
  [otherProperty: string | number | symbol]: any;
}

export { IEditorComponent, IEditor, IEditorParams };
