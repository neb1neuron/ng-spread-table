import { Cell, Column } from "./cell.model";

export class CellValueChangeParams {
  public cell: Cell;
  public column: Column;
  public oldValue = '';
  public value?: any;

  constructor(obj?: CellValueChangeParams) {
    Object.assign(this, obj);
  }
}
