import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  appModuleSetup =
    `import { SpreadTableModule } from 'spread-table';
@NgModule({
  imports: [
    // Other module imports
    ...
    // spread-table modules
    SpreadTableModule,
  ],
})
export class AppModule { }
`;

  appComponentTsSetup =
    `import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Column } from "spread-table";

@Component({
selector: "app-root",
templateUrl: "./app.component.html",
styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  columns: Column[] = [
    new Column({ displayName: 'Id', name: 'id', editable: false, resizable: false }),
    new Column({ displayName: 'Album Id', name: 'albumId'),
    new Column({ displayName: 'Title', name: 'title', minWidth: 400, validators: [RequiredValidator.required(), RequiredValidator.requiredString()] }),
    new Column({ displayName: 'Url', name: 'url', minWidth: 300}),
    new Column({ displayName: 'Thumbnail Url', name: 'thumbnailUrl', minWidth: 300 })
  ];

  data: any;

  gridInstance: SpreadTableComponent = new SpreadTableComponent(new UndoRedoService());

  @ViewChild('spreadTable') set grid(gridInstance: SpreadTableComponent) {
    this.gridInstance = gridInstance;
  }

  // this is how you would add custom context menu items
  extraContextMenuItems: ContextMenuModel[] =
    [{
      menuText: 'separator'
    }, {
      faIconName: 'fas fa-american-sign-language-interpreting',
      menuText: 'Test 1',
      menuEvent: 'test1Event',
      disabled: false,
    },
    {
      faIconName: 'fas fa-archway',
      menuText: 'Test 2',
      menuEvent: 'test2Event',
      disabled: true
    },];

  // this is how you would add custom column menu items
  extraColumnMenuItems: ContextMenuModel[] =
    [{
      menuText: 'separator'
    }, {
      faIconName: 'fas fa-edit',
      menuText: 'Rename column',
      menuEvent: 'renameColumnEvent',
      disabled: false,
    }, {
      faIconName: 'fas fa-plus-square',
      menuText: 'Add column',
      menuEvent: 'addColumnEvent',
      disabled: false,
    },
    {
      faIconName: 'fas fa-trash',
      menuText: 'Remove column',
      menuEvent: 'removeColumnEvent',
      disabled: false
    },];

  constructor(private httpClient: HttpClient) {
  this.getData();
  }

  private async getData() {
  const products: any = this.httpClient.get("https://jsonplaceholder.typicode.com/photos");
  }

  // this is how you would change grid properties like headerBgColor, headerColor etc.
  getSpreadTable() {
    console.log(this.gridInstance as SpreadTableComponent);
    this.gridInstance.headerBgColor = '#f5f5f5';
    this.gridInstance.headerColor = '#000';
    this.result = Object.keys(this.gridInstance).join('<br>');
    this.event = 'Grid properties';
  }

  // this is how you would get selected cells
  getSelectedCells() {
    console.log(this.gridInstance.getSelectedCells());
    this.result = JSON.stringify(this.gridInstance.getSelectedCells(), null, 2);
    this.event = 'Selected Cells';
  }

  // this is how you would get all the data in the grid
  getGridData() {
    console.log(this.gridInstance.getData());
    this.result = JSON.stringify(this.gridInstance.getData(), null, 2);
    this.event = 'Grid instance';
  }

  // cell value change event
  onCellValueChange(event: Change[]) {
    console.log('changes:', event);
    this.result = JSON.stringify(event, null, 2);
    this.event = 'Cell value change';
  }

  // context menu event
  onContextMenuEvent(event: ContextMenuModel) {
    console.log('contextMenuEvent', event);
    this.result = JSON.stringify(event, null, 2);
    this.event = 'Menu event';
  }

  // column menu event
  async onColumnMenuEvent(event: ContextMenuModel) {
    console.log('contextMenuEvent', event);
    this.result = JSON.stringify(event, null, 2);
    this.event = 'Menu event';
    if (event.menuEvent === 'addColumnEvent') {
      const result = await this.openDialog(\`Add new column\`, 'Column name', 'Add', 'Cancel');

      if (!result) return;

      // define the new column
      const newColumn = new Column({ name: result, displayName: result, editable: true, resizable: true, minWidth: 200, });
      // add the new column to the columns array
      this.columns.splice(this.columns.indexOf(event.column!) + 1, 0, newColumn);
      this.columns = [...this.columns];

      // add cells in the data array for the new column
      this.gridInstance.data.forEach((row: Row) => {
        row.cells.splice(this.columns.indexOf(newColumn), 0, new Cell({ columnName: newColumn.name, value: '', originalValue: '', rowIndex: row.rowIndex }));
      });
      this.gridInstance.setColumnsWidth();
    }

    if (event.menuEvent === 'removeColumnEvent') {
      this.gridInstance.data.forEach((row: Row) => {
        let cells = row.cells.filter((cell: Cell) => cell.columnName !== event.column!.name);
        row.cells = [...cells];
      });

      this.columns.splice(this.columns.indexOf(event.column!), 1);
      this.columns = [...this.columns];

      // if there were changes in the undo stack on this column remove them
      this.gridInstance.undoRedoService._changesForUndo.forEach((changes: Change[]) => {
        changes.forEach((change: Change) => {
          if (change.coordinates.columnName === event.column!.name)
            changes.splice(changes.indexOf(change), 1);
        });
      });

      this.gridInstance.setColumnsWidth();
    }

    if (event.menuEvent === 'renameColumnEvent') {
      const result = await this.openDialog(\`Rename - \${event.column!.displayName}\`, 'Column name', 'Rename', 'Cancel', event.column!.displayName);

      if (!result) return;

      // change cells column name value to the renamed column name
      this.gridInstance.data.forEach((row: Row) => {
        let cell = row.cells.find((cell: Cell) => cell.columnName === event.column!.name);
        cell!.columnName = result;
      });

      // if there were changes in the undo stack on this column set them to the new column name
      this.gridInstance.undoRedoService._changesForUndo.forEach((changes: Change[]) => {
        changes.forEach((change: Change) => {
          if (change.coordinates.columnName === event.column!.name)
            change.coordinates.columnName = result;
        });
      });

      // rename column in the columns array
      const columnIndex = this.columns.indexOf(event.column!);
      this.columns[columnIndex].displayName = result;
      this.columns[columnIndex].name = result;
      this.columns = [...this.columns];

      this.gridInstance.setColumnsWidth();
    }
  }

  async openDialog(headerText: string, bodyText: string, okButtonText: string, cancelButtonText: string, value: string = '') {
    const dialogRef = this.dialog.open(CustomModalComponent);

    dialogRef.componentInstance.headerText = headerText;
    dialogRef.componentInstance.bodyText = bodyText;
    dialogRef.componentInstance.okButtonText = okButtonText;
    dialogRef.componentInstance.cancelButtonText = cancelButtonText;
    dialogRef.componentInstance.value = value;

    const result = await firstValueFrom(dialogRef.afterClosed());

    return result;
  }
}`;

  appComponentHtmlSetup =
    `<spread-table *ngIf="data"
                #spreadTable
                [columns]="columns"
                [minColumnWidth]="100"
                [rowHeight]="36"
                [indexWidth]="60"
                [rawData]="data"
                [undoRedoStackSize]="20"
                [extraContextMenuItems]="extraContextMenuItems"
                [extraColumnMenuItems]="extraColumnMenuItems"
                (cellValueChange)="onCellValueChange($event)"
                (contextMenuEvent)="onContextMenuEvent($event)"
                (columnMenuEvent)="onColumnMenuEvent($event)">
  </spread-table>`;

  customRendererTs =
    `import { Component } from '@angular/core';
import { IRendererComponent, IRendererParams } from 'test-packages/spread-table/lib/models/renderer.models';

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
`;

  customRendererHtml =
    `<div style="white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;">
  <img [src]="params?.value"
       height="26px"
       width="26px"
       alt="placeholder"
       style="margin-right:5px">
  <span style="vertical-align: top">{{text}}</span>
</div>
`;

  customEditorTs =
    `import { Component, EventEmitter } from '@angular/core';
import { IEditorComponent, IEditorParams } from 'test-packages/spread-table/lib/models/editor.models';

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
`;

  customEditorHtml =
    `<select style="width: 100%;height:100%;"
        autofocus
        [formControl]="params?.input"
        (change)="select($event)"
        class="form-control">
  <option [style.background]="item == params?.input.value ? '#dbf2ff' : ''"
          *ngFor="let item of params?.column?.editorParams?.items"
          [value]="item">{{item}}</option>
</select>
`;

  addCustomRendererAndEditor =
    `frameworkComponents = {
    dropdownEditor: StDropdownEditorComponent,
    customRenderer: StCustomRendererComponent
  };

  columns: Column[] = [
    new Column({ displayName: 'Id', name: 'id', editable: false, resizable: false }),
    new Column({ displayName: 'Album Id', name: 'albumId', editorComponent: this.frameworkComponents.dropdownEditor, editorParams: { items: [1, 2, 3, 4] } }),
    new Column({ displayName: 'Title', name: 'title', minWidth: 400, validators: [RequiredValidator.required(), RequiredValidator.requiredString()] }),
    new Column({ displayName: 'Url', name: 'url', minWidth: 300, rendererComponent: this.frameworkComponents.customRenderer }),
    new Column({ displayName: 'Thumbnail Url', name: 'thumbnailUrl', minWidth: 300, rendererComponent: this.frameworkComponents.customRenderer })];
    `;
}
