import { EventEmitter, Type } from "@angular/core";

export interface IRendererComponent {
  stInit(params: IRendererParams);
}

export interface IRenderer {
  rendererParams: IRendererParams;
}

export interface IRendererParams {
  rendererComponent: Type<any>;
  data: any;
  value: any;
  [otherProperty: string | number | symbol]: any;
}
