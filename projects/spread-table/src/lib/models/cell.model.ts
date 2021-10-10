export class Cell {
  public columnName = '';
  public value?: any;
  public selected?= false;
  public disabled?= false;
  public rowIndex = 0;
  public columnIndex = 0;
  public errors?: string = '';

  constructor(obj?: Cell) {
    Object.assign(this, obj);
  }
}

export class Row {
  public cells: Cell[] = [];
  public rowIndex = 0;
  public selected?= false;
  public disabled?= false;
  public hasErrors?= false;

  constructor(obj?: Row) {
    Object.assign(this, obj);
  }
}

export class Column {
  public name = '';
  public displayName?= 'N/A';
  public width?= '100px';
  public editable?= true;
  public validators?: any[] | undefined;

  constructor(obj?: Column) {
    Object.assign(this, obj);
    if (!obj?.displayName) {
      this.displayName = obj?.name;
    }
  }
}

