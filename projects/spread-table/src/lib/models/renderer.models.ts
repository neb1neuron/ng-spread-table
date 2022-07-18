import { Type } from "@angular/core";

interface IRendererComponent {
  stInit(params: IRendererParams);
}

interface IRenderer {
  rendererParams: IRendererParams;
}

interface IRendererParams {
  rendererComponent: Type<any>;
  value: any;
  [otherProperty: string | number | symbol]: any;
}

export { IRendererComponent, IRenderer, IRendererParams };
