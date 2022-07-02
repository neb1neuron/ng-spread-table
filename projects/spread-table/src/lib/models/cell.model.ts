export class Cell {
  public columnName = '';
  public value?: any;
  public originalValue?: any;
  public selected?= false;
  public disabled?= false;
  public rowIndex = 0;
  //public columnIndex = 0;
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
  public minWidth?: number;
  public editable?= true;
  public resizable?= true;
  public validators?: any[] | undefined;
  public editorComponent?: any | undefined;
  public editorParams?: any | undefined;
  public rendererComponent?: any | undefined;
  public rendererParams?: any | undefined;

  constructor(obj?: Column) {
    Object.assign(this, obj);
    if (!obj?.displayName) {
      this.displayName = obj?.name;
    }
  }
}

